import { useSelector } from 'react-redux';
import User from '../users/user/User';
import style from './style.module.scss';

const UserPanel = () => {
  const { user } = useSelector((state: any) => state.user);

  return (
    <div className={style.user}>
      <div className={style['user__item']}>
        <User />
        <div className={style['user__information']}>
          <div className={style['user__name']}>
            {!user.displayName ? 'Unnamed' : user.displayName}
          </div>
          <div className={style['user__email']}>{user.email}</div>
        </div>
      </div>
      <div className={style['user__statistics']}>
        <div className={style['user__statistics-item']}>
          <span className={style['user__statistics-numbers']}>126</span>
          <span className={style['user__statistics-name']}>Followers</span>
        </div>
        <div className={style['user__statistics-item']}>
          <span className={style['user__statistics-numbers']}>184</span>
          <span className={style['user__statistics-name']}>Following</span>
        </div>
        <div className={style['user__statistics-item']}>
          <span className={style['user__statistics-numbers']}>14</span>
          <span className={style['user__statistics-name']}>Posts</span>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
