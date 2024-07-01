import { Link } from 'react-router-dom';
import img from '../../assets/img/error404.png';
import style from './style.module.scss';

const PageNotFound = () => {
  return (
    <div className={style.error}>
      <div className={style['error__content']}>
        <img src={img} alt="" />
        <div className={style['error__txt']}>
          <h1 className={style['error__title']}>Sorry!</h1>
          <h2 className={style['error__subtitle']}>This page is under construction.</h2>
          <div>Please come back later.</div>
          <Link to="/" className={style['error__link']}>
            BACK TO HOMEPAGE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
