import React from 'react';
import PropTypes from 'prop-types';
import style from './Editor-tabpanel.module.scss';

const EditorTabpanel = (props) => {
  const {
    label,
    children,
    value,
    index,
    ...rest
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${label}`}
      aria-labelledby={`tab-${label}`}
      {...rest}
    >
      {(value === index) && children}
    </div>
  );
};

EditorTabpanel.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element,
  value: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
};

export default EditorTabpanel;
