import { useState } from 'react';
import { IPost } from '../../types';
import AddPost from '../../components/add-post/AddPost';
import Posts from '../../components/posts/Posts';
import ComponentsLayout from '../../components/layout/components-layout/ComponentsLayout';

import style from './style.module.scss';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {
      author: {
        _id: '3535',
        avatar:
          'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833562.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user',
        name: 'Random Name',
      },
      createdAt: '7 minutes ago',
      content: 'skksflsj slfklskf sflkisjewocm sbcn iio slclskc',
      images: [
        'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
        'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
        'https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp',
        'https://gratisography.com/wp-content/uploads/2023/10/gratisography-pumpkin-scarecrow-800x525.jpg',
        'https://media.istockphoto.com/id/1412728788/vector/free-banner-speech-bubble-label-sticker-ribbon-template-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=G1GgZfXAm0M62C3KYOBZh6OBt18mEcAbd-hVGWab4WY=',
      ],
    },
  ]);

  return (
    <div className={style.home}>
      <ComponentsLayout>
        <AddPost setPosts={setPosts} />
      </ComponentsLayout>
      <ComponentsLayout>
        <Posts posts={posts} />
      </ComponentsLayout>
    </div>
  );
};

export default Home;
