import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { setUser } from '../../redux/slices/userSlice';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const auth = getAuth();

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }: any) => {
        // Signed in
        console.log(user);
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
        console.log(errorMessage);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign up</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default RegisterPage;
