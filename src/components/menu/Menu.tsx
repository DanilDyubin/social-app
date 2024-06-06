import { useNavigate } from 'react-router-dom';

import { menuData } from './menu-data/MenuData';
import MenuItem from './menu-item/MenuItem';

import style from './style.module.scss';

const Menu = () => {
  let navigate = useNavigate();
  return (
    <div className={style.menu}>
      <ul className={style['menu-list']}>
        {menuData.map((item) => {
          return (
            <li
              className={style['menu-list--item']}
              key={item.link}
              onClick={() => navigate(item.link)}>
              <MenuItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
