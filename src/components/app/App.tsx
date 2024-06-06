import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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
import Auth from '../../pages/auth/Auth';
import Messages from '../../pages/messages/Messages';
import Conversation from '../../pages/messages/Conversation';
import Friends from '../../pages/friends/Friends';
import Profile from '../../pages/profile/Profile';
import LoginPage from '../../pages/login-page/LoginPage';
import RegisterPage from '../../pages/register-page/RegisterPage';
import PageNotFound from '../../pages/page-not-found/PageNotFound';

// Your web app's Firebase configuration
// firebase.initializeApp({
//   apiKey: 'AIzaSyCeo2J-ftjA-DKc4Th_2BnMQuQy3VMMAv0',
//   authDomain: 'socialapp-e45c4.firebaseapp.com',
//   projectId: 'socialapp-e45c4',
//   storageBucket: 'socialapp-e45c4.appspot.com',
//   messagingSenderId: '176241754225',
//   appId: '1:176241754225:web:289c80bd233d74e09e5bd0',
// });

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     // errorElement: <ErrorPage />,
//   },
//   {
//     path: 'contacts/:contactId',
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
  {
    path: '/profile:id',
    element: <Profile />,
  },
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
