import React from 'react';
import PropTypes from 'prop-types';
import style from './Link.module.scss';

const Link = (props) => {
  const {className = '', href, text, children} = props;

  return (
    <div className={className}>
      <a className={style['link']} href={href}>
        {text}
        {children}
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
