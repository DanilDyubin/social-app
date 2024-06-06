import { ReactNode } from 'react';
import { useState, useEffect, createContext } from 'react';

interface ThemetContextValue {
  theme: string;
  onChangeTheme: () => void;
}

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemetContextValue>({
  theme: 'theme' || 'light',
  onChangeTheme: () => {},
});

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const root = document.querySelector(':root') as HTMLElement;
    const themes = ['background-theme', 'text-theme', 'body-theme'];
    if (root != null) {
      themes.map((item) => {
        root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`);
      });
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, onChangeTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
