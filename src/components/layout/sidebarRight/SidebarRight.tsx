import ComponentsLayout from '../components-layout/ComponentsLayout';
import UserList from '../../users/user-list/UserList';

import style from './style.module.scss';

const SidebarRight = () => {
  return (
    <div className={style['sidebar-right']}>
      <ComponentsLayout>
        <UserList />
      </ComponentsLayout>
    </div>
  );
};

export default SidebarRight;
