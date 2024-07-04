import style from './style.module.scss';

const Comment = () => {
  return (
    <div className={style['post__author']}>
      {/* <div className={style['post__author-item']}>
      <img
        src={!post.author.avatar ? defaultImg : post.author.avatar}
        alt="avatar"
        className={style['post__author-img']}
      />
    </div>
    <div className={style['post__author__information']}>
      <div className={style['post__author-name']}>{post.author.name}</div>
      <div className={style['post__author-time']}>{post.createdAt}</div>
    </div> */}
    </div>
  );
};

export default Comment;
