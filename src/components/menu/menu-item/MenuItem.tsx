import { IMenuItem } from '../../../types';

import style from './style.module.scss';

interface IMenuItems {
  item: IMenuItem;
}

const MenuItem: React.FC<IMenuItems> = ({ item }) => {
  return (
    <div className={style['menu-item']}>
      <item.icon className={style['menu-item--icon']} />
      <span className={style['menu-item--title']}>{item.title}</span>
    </div>
  );
};

export default MenuItem;
