import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IPost } from '../../types';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import defaultImg from '../../assets/img/avatar.jpg';

import style from './style.module.scss';

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const [selected, setSelected] = useState(false);

  return (
    <article className={style.post}>
      <Link to={`/profile/${post.author.id}`}>
        <div className={style['post__author']}>
          <div className={style['post__author-item']}>
            <img
              src={!post.author.avatar ? defaultImg : post.author.avatar}
              alt="avatar"
              className={style['post__author-img']}
            />
          </div>
          <div className={style['post__author__information']}>
            <div className={style['post__author-name']}>{post.author.name}</div>
            <div className={style['post__author-time']}>{post.createdAt}</div>
          </div>
        </div>
      </Link>
      <div className={style['post__content']}>{post.content}</div>
      {post.images && (
        <div className={style['post__images']}>
          <div className={style['post__images-item']}>
            <img src={post.images} alt="image" className={style['post__images-img']} />
          </div>
          {/* {post.images.map((image) => {
            return (
              <div className={style['post__images-item']} key={image}>
                <img src={image} alt="image" className={style['post__images-img']} />
              </div>
            );
          })} */}
        </div>
      )}
      <div className={style['post__divider']}></div>
      <div className={style['post__panel']}>
        <div className={style['post__panel-item']} onClick={() => setSelected(!selected)}>
          <FavoriteIcon
            className={
              selected ? style['post__likes'] + ` ` + style.selected : style['post__likes']
            }
          />
          <span className={style['post__likes-counter']}>0 Likes</span>
        </div>
        <div className={style['post__panel-item']}>
          <ChatBubbleIcon className={style['post__comments']} />
          <span className={style['post__comments-counter']}>0 Comments</span>
        </div>
      </div>
    </article>
  );
};

export default Post;
