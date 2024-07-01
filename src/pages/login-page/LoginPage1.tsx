import { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { auth } from '../../firebase';
import Logo from '../../components/logo/Logo';

import style from './style.module.scss';

interface IUserData {
  email: string;
  id: string;
  token: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }: any) => {
        // Signed in
        dispatch(
          setUser({
            name: !user.displayName ? 'Unnamed' : user.displayName,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            avatar: user.photoURL,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  };

  return (
    <div className={style['login-page']}>
      <div className={style.content}>
        <div className={style['content__left']}>
          <div className={style['content__left--top']}>
            <div>A WISE QUOTE</div>
            <div className={style['content__left--line']}></div>
          </div>
          <div className={style['content__left--bottom']}>
            <div className={style['content__left--title']}>
              <p>Get</p>
              <p>Everything</p>
              <p>You want</p>
            </div>
          </div>
        </div>
        <div className={style['content__right']}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div className={style['content__right--middle']}>
            <h2 className={style['content__right--title']}>Welcome Back</h2>
            <p className={style['content__right--text']}>
              Enter your email and password to access your account
            </p>
            <div className={style.form}>
              <label className={style['form__label']}>
                <span className={style['form__title']}>Email </span>
                <input
                  className={style['form__input']}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className={style['form__label']}>
                <span className={style['form__title']}>Password</span>
                <input
                  className={style['form__input']}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button className={style['form__btn']} onClick={() => handleLogin(email, password)}>
                Login
              </button>
              {error && <span>{error}</span>}
            </div>
          </div>
          <div className={style['content__right--bottom']}>
            Don't have an account?{' '}
            <span>
              <Link to="/register">Sign up!</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
