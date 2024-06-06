import { Link } from 'react-router-dom';
import { IPost } from '../../types';

import style from './style.module.scss';

interface IPosts {
  posts: IPost[];
}

const Posts: React.FC<IPosts> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <article key={post.author._id}>
            <Link to={`/profile/${post.author._id}`}>
              <div className={style['user-item']}>
                <div className={style['user-item--cover']}>
                  <img className={style['user-item--img']} src={post.author.avatar} alt="avatar" />
                </div>
                <div>
                  <div className="name">{post.author.name}</div>
                  <div>{post.createdAt}</div>
                </div>
              </div>
            </Link>
            {post?.images?.length && (
              <div className="images">
                {post.images.map((image) => {
                  return <img src={image} alt="" key={image} />;
                })}
              </div>
            )}
          </article>
        );
      })}
    </>
  );
};

export default Posts;
