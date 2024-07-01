import Diversity2Icon from '@mui/icons-material/Diversity2';

import style from './style.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={style.logo}>
      <Diversity2Icon className={style['logo__icon']} />
      <span className={style['logo__txt']}>Social App</span>
    </div>
  );
};

export default Logo;
