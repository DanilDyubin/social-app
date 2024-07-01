import Auth from '../auth/Auth';

const LoginPage = () => {
  const isRegister = true;
  const title = 'Welcome Back';
  const btnName = 'Login';
  return <Auth isRegister={isRegister} title={title} btnName={btnName} />;
};

export default LoginPage;
