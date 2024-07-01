import { useState, useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';
import ThemeComponent from '../../themeComponent/ThemeComponent';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import Search from '../../search/Search';
import User from '../../users/user/User';
// import UserPopup from '../../user-popup/UserPopup';
import style from './header.module.scss';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/use-auth';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/userSlice';
import Logo from '../../logo/Logo';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const { onChangeTheme, theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const auth: any = getAuth();
  // console.log(auth.currentUser.photoURL);
  let navigate = useNavigate();

  const { user } = useSelector((state: any) => state.user);

  const logOut = (auth: any) => {
    signOut(auth)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const changeProfile = (auth: any) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        alert('Now you need to relogin with new information!');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo />
        <Search />
        <div className={style['header-right']}>
          <div className={style['header-right--item']}>
            <ThemeComponent theme={theme} onChangeTheme={onChangeTheme} />
          </div>
          <div className={style['header-right--item']}>
            <NotificationsIcon className={style.allert} sx={{ fontSize: 20 }} />
          </div>
          <div className={style['header-user']} onClick={() => setOpen(!open)}>
            <User />
            <div className={style['header-user--name']}>
              {!user.displayName ? 'Unnamed' : user.displayName}
            </div>
            <KeyboardArrowDownIcon className={style['header-user--icon']} sx={{ fontSize: 18 }} />
          </div>
          {open && (
            <div className={style.popup}>
              <div className={style['popup__title']}>
                <span>Edit user profile</span>
                <EditIcon sx={{ fontSize: 18 }} />
              </div>
              <div className={style['popup__divider']}></div>
              <div className={style['popup__form']}>
                <label className={style['popup__form-label']}>
                  <span className={style['popup__form-title']}>Add user name</span>
                  <input
                    className={style['popup__form-input']}
                    type="text"
                    placeholder="Type your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className={style['popup__form-label']}>
                  <span className={style['popup__form-title']}>Add user avatar</span>
                  <input
                    className={style['popup__form-input']}
                    type="text"
                    placeholder="Paste image URL"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </label>
              </div>
              <div className={style['popup__form-btns']}>
                <button className={style['popup__form-btn']} onClick={() => changeProfile(auth)}>
                  change profile
                </button>
                <button
                  className={style['popup__form-btn']}
                  onClick={() => {
                    setPhoto('');
                    setName('');
                  }}>
                  clear form
                </button>
              </div>
              <div className={style['popup__divider']}></div>
              <div className={style['popup__logout']} onClick={() => logOut(auth)}>
                <LogoutIcon />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
