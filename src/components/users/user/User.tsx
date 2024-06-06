import { Link } from 'react-router-dom';
import avatar from '../../../assets/img/avatar.jpg';
import style from './style.module.scss';

const User = ({ user }: any) => {
  return (
    <Link to={`/profile/`}>
      <div className={style.user}>
        <img className={style['user-img']} src={avatar} alt="avatar" />
      </div>
    </Link>
  );
};

export default User;
