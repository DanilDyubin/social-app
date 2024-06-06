import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import style from './themeComponent.module.scss';

interface ThemetContextValue {
  theme: string;
  onChangeTheme: () => void;
}

const ThemeComponent = ({ theme, onChangeTheme }: ThemetContextValue) => {
  return (
    <div className={style.theme} onClick={onChangeTheme}>
      {theme === 'light' ? (
        <LightModeIcon className={style.icon} sx={{ fontSize: 20 }} />
      ) : (
        <DarkModeIcon className={style.icon} sx={{ fontSize: 20 }} />
      )}
    </div>
  );
};

export default ThemeComponent;
