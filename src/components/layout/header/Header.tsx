import { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';
import ThemeComponent from '../../themeComponent/ThemeComponent';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Search from '../../search/Search';
import User from '../../users/user/User';
import style from './header.module.scss';

const Header: React.FC = () => {
  const { onChangeTheme, theme } = useContext(ThemeContext);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <div className={style['logo-img']}>SA</div>
          <p className={style['logo-txt']}>Social App</p>
        </div>
        <Search />
        <div className={style['header-right']}>
          <div className={style['header-right--item']}>
            <ThemeComponent theme={theme} onChangeTheme={onChangeTheme} />
          </div>
          <div className={style['header-right--item']}>
            <NotificationsIcon className={style.allert} sx={{ fontSize: 20 }} />
          </div>
          <div className={style['header-user']}>
            <User />
            <KeyboardArrowDownIcon className={style['header-user--icon']} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
