import { useState, useEffect } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { IPost, TypeSetState } from '../../types';
import { users } from '../../service/usersData';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import User from '../users/user/User';
import { useSelector } from 'react-redux';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

import style from './style.module.scss';

// interface IFile {
//   file: Blob | Uint8Array | ArrayBuffer | null;
// }

const AddPost = () => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');
  const [images, setImages] = useState('');
  const [loadImg, setLoadImg] = useState(null);
  const [comment, setComment] = useState({});
  const [comments, setComments] = useState([]);

  const { user } = useSelector((state) => state.user);
  const date = new Date().toLocaleString('en-US');

  useEffect(() => {
    const uploadFile = () => {
      // const uniqueFileName = new Date().getTime() + file.name;

      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setLoadImg(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImages(downloadURL);
          });
        },
      );
    };
    file && uploadFile();
  }, [file]);

  const addPostHandler = async () => {
    if (user) {
      try {
        const res = await addDoc(collection(db, 'posts'), {
          // author: user,
          author: {
            id: user.uid,
            avatar: user.photoURL,
            name: user.displayName,
          },
          content,
          createdAt: date,
          images,
          comments,
        });
        setContent('');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };

  return (
    <div className={style['add-post']}>
      <div className={style['add-post__wrapper']}>
        <User user={user} />
        <div className={style['add-post__form']}>
          <input
            className={style['add-post__input']}
            type="text"
            placeholder="What's on your mind?"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <label className={style['add-post__upload']}>
            <AddAPhotoIcon className={style['add-post__upload--img']} sx={{ fontSize: 20 }} />
            <input
              type="file"
              className={style['add-post__upload--input']}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>
        <button
          className={style['add-post__btn']}
          onClick={() => addPostHandler()}
          disabled={loadImg !== null && loadImg < 100}>
          Share Post
        </button>
      </div>
      <div className={style['add-post__btns']}></div>
    </div>
  );
};

export default AddPost;
