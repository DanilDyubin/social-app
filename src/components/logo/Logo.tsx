import Diversity2Icon from '@mui/icons-material/Diversity2';
import icon from '../../assets/icons/favicon.png';

import style from './style.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={style.logo}>
      {/* <Diversity2Icon className={style['logo__icon']} /> */}
      <img src={icon} alt="" className={style['logo__img']} />
      <span className={style['logo__txt']}>Social App</span>
    </div>
  );
};

export default Logo;
