import { useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { IPost, TypeSetState } from '../../types';
import { users } from '../../service/usersData';
import User from '../users/user/User';

import style from './style.module.scss';

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: React.FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState('');

  const addPostHandler = () => {
    setPosts((prev) => [
      ...prev,
      {
        author: users[0],
        content,
        createdAt: '5 минут назад',
      },
    ]);
  };

  return (
    <div className={style['add-post']}>
      <div className={style['add-post--wrapper']}>
        <User />
        <input
          className={style['add-post--input']}
          type="text"
          placeholder="What's on your mind?"
          onKeyPress={addPostHandler}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button className={style['add-post--btn']}>Share Post</button>
      </div>
      <div className={style['add-post--btns']}></div>
    </div>
  );
};

export default AddPost;
