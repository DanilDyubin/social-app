import ComponentsLayout from '../components-layout/ComponentsLayout';
import Menu from '../../menu/Menu';

import style from './style.module.scss';

const SidebarLeft: React.FC = () => {
  return (
    <div className={style['sidebar-left']}>
      <ComponentsLayout>
        <Menu />
      </ComponentsLayout>
    </div>
  );
};

export default SidebarLeft;
