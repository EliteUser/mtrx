import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import style from './Input.module.scss';

// TODO CUSTOM ARROW UP/DOWN KEYS

const Input = (props) => {
  const {
    styleName = '',
    id,
    label,
    value,
    step = 1,
    min,
    max,
    onChange,
  } = props;

  const inputRef = useRef(null);

  let inputClass = [style['number-input__input']];
  if (styleName === 'integer') {
    inputClass.push(style['number-input__input--integer']);
  }
  inputClass = inputClass.join(' ');

  const onWheel = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    const increment = evt.deltaY > 0 ? -step : step;

    evt.target.value = (parseFloat(value) + increment).toFixed(1);
    return onChange(evt);
  };

  const onFocus = (evt) => evt.target.addEventListener('wheel', onWheel);
  const onBlur = (evt) => evt.target.removeEventListener('wheel', onWheel);

  useEffect(() => {
    const input = inputRef.current;

    input.addEventListener('focus', onFocus);
    input.addEventListener('blur', onBlur);

    return () => {
      input.removeEventListener('focus', onFocus);
      input.removeEventListener('blur', onBlur);
    };
  }, []);

  const onKeyDown = (evt) => {
    const value = evt.target.value;
    let increment = 0;
    if (evt.key === 'ArrowUp') {
      increment = step;
      evt.preventDefault();
    } else if (evt.key === 'ArrowDown') {
      increment = -step;
      evt.preventDefault();
    } else {
      return;
    }

    evt.target.value = (parseFloat(value) + increment).toFixed(1);
    return onChange(evt);
  };

  return (
    <div className={style['number-input']}>
      {
        label ?
          <label
            className={style['number-input__label']}
            htmlFor={id}>{label}
          </label> :
          null
      }
      <input
        lang={'en-US'}
        ref={inputRef}
        className={inputClass}
        id={id}
        type={'tel'}
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={onChange}

        onKeyDown={onKeyDown}
      />
    </div>
  );
};

Input.propTypes = {
  styleName: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default Input;
