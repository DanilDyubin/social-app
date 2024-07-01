import { FC, FormEvent, ChangeEvent, useState } from 'react';
// import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { setUser } from '../../redux/slices/userSlice';
import Logo from '../../components/logo/Logo';

import style from './style.module.scss';

interface IAuthProps {
  isRegister: boolean;
  title: string;
  btnName: string;
}

const Auth: FC<IAuthProps> = ({ isRegister, title, btnName }) => {
  // const [userData, setUserData] = useState<IUserData>({ email: '', password: '' } as IUserData);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleAuth = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegister) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(({ user }: any) => {
          // Signed in
          dispatch(
            setUser({
              user: user,
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
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(({ user }: any) => {
          // Signed in
          console.log(user);
          dispatch(
            setUser({
              user: user,
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
          console.log(errorMessage);
        });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
            <h2 className={style['content__right--title']}>{title}</h2>
            <p className={style['content__right--text']}>
              Enter your email and password to access your account
            </p>
            <form className={style.form} onSubmit={handleAuth}>
              <label className={style['form__label']}>
                <span className={style['form__title']}>Email </span>
                <input
                  className={style['form__input']}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label className={style['form__label']}>
                <span className={style['form__title']}>Password</span>
                <input
                  className={style['form__input']}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <button className={style['form__btn']} type="submit">
                {btnName}
              </button>
              {error && <span>{error}</span>}
            </form>
          </div>
          {isRegister ? (
            <div className={style['content__right--bottom']}>
              Don't have an account?{' '}
              <span>
                <Link to="/register">Sign up!</Link>
              </span>
            </div>
          ) : (
            <div className={style['content__right--bottom']}>
              Already have an account?{' '}
              <span>
                <Link to="/login">Login! </Link>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Auth;
