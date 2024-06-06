import UserItem from '../user-item/UserItem';
import { users } from '../../../service/usersData';
import style from './style.module.scss';

const UserList = () => {
  return (
    <div className={style['user-list']}>
      <h4 className={style['user-list--title']}>Friends online</h4>
      <div className={style['user-list--wrapper']}>
        {users.map((user) => {
          return <UserItem key={user._id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default UserList;
