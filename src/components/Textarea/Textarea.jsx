import React from 'react';
import PropTypes from 'prop-types';
import style from './Textarea.module.scss';

const Textarea = (props) => {
  const {
    value,
    name,
    onChange
  } = props;
  return (
    <textarea
      className={style['textarea']}
      name={name}
      value={value}
      onChange={onChange}/>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default Textarea;
