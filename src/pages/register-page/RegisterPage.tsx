import Auth from '../auth/Auth';

const RegisterPage = () => {
  const isRegister = false;
  const title = 'Welcome';
  const btnName = 'Sign up';
  return <Auth isRegister={isRegister} title={title} btnName={btnName} />;
};

export default RegisterPage;
