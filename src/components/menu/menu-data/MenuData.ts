import * as icons from '@mui/icons-material';
import { IMenuItem } from '../../../types';

export const menuData: IMenuItem[] = [
  {
    title: 'My page',
    link: '/',
    icon: icons.Home,
  },
  {
    title: 'Messages',
    link: '/messages',
    icon: icons.Email,
  },
  {
    title: 'Friends',
    link: '/friends',
    icon: icons.Group,
  },
  {
    title: 'News',
    link: '/',
    icon: icons.Feed,
  },
  {
    title: 'Photos',
    link: '/photos',
    icon: icons.InsertPhoto,
  },
];
