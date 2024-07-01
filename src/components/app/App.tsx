import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';
// firebase
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import '../../firebase';
// components
import Header from '../layout/header/Header';
import SideBarLeft from '../layout/sidebarLeft/SidebarLeft';
import SideBarRight from '../layout/sidebarRight/SidebarRight';
import Home from '../../pages/home/Home';
// import Auth from '../../pages/auth/Auth1';
import { useAuth } from '../../hooks/use-auth';
import Messages from '../../pages/messages/Messages';
import Conversation from '../../pages/messages/Conversation';
import Friends from '../../pages/friends/Friends';
import Profile from '../../pages/profile/Profile';
import LoginPage from '../../pages/login-page/LoginPage';
import RegisterPage from '../../pages/register-page/RegisterPage';
import PageNotFound from '../../pages/page-not-found/PageNotFound';

function App() {
  const { isAuth } = useAuth();

  const router = createBrowserRouter([
    {
      path: '/',
      element: isAuth ? <Layout /> : <Navigate to="/login" />,
      // element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Conversation />,
        },
        {
          path: '/friends/:id',
          element: <Friends />,
        },
        // {
        //   path: '/auth',
        //   element: <Auth />,
        // },
      ],
    },
    // {
    //   path: '/profile:id',
    //   element: <Profile />,
    // },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ]);

  function Layout() {
    return (
      <>
        <Header />
        <div className="container layout">
          <SideBarLeft />
          <Outlet />
          <SideBarRight />
        </div>
      </>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
