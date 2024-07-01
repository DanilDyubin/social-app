import ComponentsLayout from '../components-layout/ComponentsLayout';
import UserPanel from '../../user-panel/UserPanel';
import Menu from '../../menu/Menu';

import style from './style.module.scss';

const SidebarLeft: React.FC = () => {
  return (
    <div className={style['sidebar-left']}>
      <ComponentsLayout>
        <UserPanel />
      </ComponentsLayout>
      <ComponentsLayout>
        <Menu />
      </ComponentsLayout>
    </div>
  );
};

export default SidebarLeft;
