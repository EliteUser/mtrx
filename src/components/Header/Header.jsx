import React, {useState} from 'react';
import style from './Header.module.scss';

import Logo from '../Logo';
import ThemeSwitcher from '../Theme-switcher';

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const themeSwitcherChangeHandler = () => {
    const attrToSet = !isDark ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', attrToSet);
    setIsDark(!isDark);
  };

  return (
    <div className={style['header']}>
      <Logo/>
      <ThemeSwitcher
        isDarkModeEnabled={isDark}
        changeHandler={themeSwitcherChangeHandler}/>
    </div>
  );
};

export default Header;
