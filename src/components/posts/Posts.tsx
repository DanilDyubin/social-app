import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../types';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import ComponentsLayout from '../layout/components-layout/ComponentsLayout';
import Post from '../post/Post';

import style from './style.module.scss';

// interface IPosts {
//   posts: IPost[];
// }

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {
      author: {
        id: '',
        avatar: '',
        name: '',
      },
      createdAt: '',
      content: '',
      images: '',
      like: false,
      likeCounter: 0,
    },
  ]);

  useEffect(() => {
    // const q = query(collection(db, 'posts'));
    const unsubscribe = onSnapshot(collection(db, 'posts'), (doc) => {
      const postsArr: IPost[] = [];
      doc.forEach((d: any) => {
        postsArr.push(d.data());
        // setPosts((prev) => [...prev, d.data()]);
        // console.log(`data content ${d.data().content}`);
      });
      setPosts(postsArr);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(posts);

  return (
    <div className={style.posts}>
      {posts.map((post: IPost, index) => {
        return (
          <ComponentsLayout key={index}>
            <Post post={post} key={post.author.id} />
          </ComponentsLayout>
        );
      })}
    </div>
  );
};

export default Posts;
