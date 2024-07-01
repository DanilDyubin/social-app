import React, { FC, SyntheticEvent, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../context/useAuth';

interface IUserData {
  email: string;
  password: string;
}

const Auth = () => {
  const [userData, setUserData] = useState<IUserData>({ email: '', password: '' } as IUserData);
  const [isRegForm, setIsRegForm] = useState(false);
  const [error, setError] = useState('');

  const { ga } = useAuth();

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(ga, userData.email, userData.password);
      } catch (error: any) {
        error.message && setError(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password);
      } catch (error: any) {
        error.message && setError(error.message);
      }
    }
    setUserData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="auth">
      {error ? <div className="alert">{error}</div> : null}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
        <button onClick={() => setIsRegForm(false)}>Auth</button>
        <button onClick={() => setIsRegForm(true)}>Register</button>
      </form>
    </div>
  );
};

export default Auth;
