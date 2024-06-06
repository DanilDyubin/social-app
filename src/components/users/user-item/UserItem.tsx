import { Link } from 'react-router-dom';
import avatar from '../../../assets/img/avatar.jpg';
import style from './style.module.scss';

const UserItem = ({ user }: any) => {
  return (
    <Link to={`/profile/${user.id}`}>
      <div className={style['user-item']}>
        <div className={style['user-item--cover']}>
          <img className={style['user-item--img']} src={user.avatar} alt="avatar" />
          {user.isOnline && <span className={style['user-item--dot']}></span>}
        </div>
        <div className="name">{user.name}</div>
      </div>
    </Link>
  );
};

export default UserItem;
