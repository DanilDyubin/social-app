import { ReactNode } from 'react';
import style from './style.module.scss';

interface ComponentsLayoutProps {
  children: ReactNode;
}

const ComponentsLayout = ({ children }: ComponentsLayoutProps) => {
  return <div className={style['components-layout']}>{children}</div>;
};

export default ComponentsLayout;
