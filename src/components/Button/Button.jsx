import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = (props) => {
  const {
    className,
    isTextHidden = false,
    text,
    children,
    onBtnClick,
    ...rest
  } = props;

  const styles = [style['btn'], className].join(' ').trim();

  const textElement = isTextHidden
    ? <span className="visually-hidden">{text}</span>
    : <span className={style['btn__text']}>{text}</span>;

  return (
    <button
      className={styles}
      type="button"
      onClick={onBtnClick}
      {...rest}
    >
      {textElement}
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  isTextHidden: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onBtnClick: PropTypes.func.isRequired
};

export default Button;
