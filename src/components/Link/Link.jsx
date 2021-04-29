import React from 'react';
import PropTypes from 'prop-types';
import style from './Link.module.scss';

const Link = (props) => {
  return (
    <div className={props.className}>
      <a className={style['link']} href={props.href}>
        {props.text}
        {props.children}
      </a>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.element
};

export default Link;
