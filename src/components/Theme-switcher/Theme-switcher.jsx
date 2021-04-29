import React from 'react';
import PropTypes from 'prop-types';
import style from './Theme-switcher.module.scss';

const ThemeSwitcher = (props) => {
  return (
    <div className={style['theme-switcher']}>
      <input
        type="checkbox"
        className={`${style['theme-switcher__input']} visually-hidden`}
        id="theme-switcher"
        checked={props.isDarkModeEnabled}
        onChange={props.changeHandler}/>
      <label
        htmlFor="theme-switcher"
        className={style['theme-switcher__switcher']}
        aria-label="Switch dark/light theme">
        <span className={style['theme-switcher__toggle']}/>
      </label>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  isDarkModeEnabled: PropTypes.bool.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
