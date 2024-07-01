import { useSelector } from 'react-redux';
import defaultImg from '../../../assets/img/no-image.png';
import style from './style.module.scss';

const User = () => {
  const userObj = useSelector((state: any) => state.user);
  // const { user } = useSelector((state: any) => state.user);
  console.log(userObj);
  return (
    <div>
      <div className={style.user}>
        <img
          className={style['user-img']}
          src={!userObj.user.photoURL ? defaultImg : userObj.user.photoURL}
          // src={!user.photoURL ? defaultImg : user.photoURL}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default User;
