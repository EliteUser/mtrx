import React, {useState} from 'react';
import style from './Header.module.scss';

import Logo from '../Logo';
import ThemeSwitcher from '../Theme-switcher';

const Header = () => {
  // TODO move to store
  const [isDark, setIsDark] = useState(true);

  const attrToSet = !isDark ? 'dark' : 'light';

  const themeSwitcherChangeHandler = () => {
    document.documentElement.setAttribute('data-theme', attrToSet);
    setIsDark(!isDark);
  };

  return (
    <div className={style['header']}>
      <Logo/>
      <ThemeSwitcher isDarkModeEnabled={isDark} changeHandler={themeSwitcherChangeHandler}/>
    </div>
  );
};

export default Header;
