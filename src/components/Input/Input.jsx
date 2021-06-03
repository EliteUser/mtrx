import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import style from './Input.module.scss';

import Button from '../Button';
import {ReactComponent as ArrowIcon} from '../../../public/assets/icon-arrow.svg';

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
    let increment = evt.deltaY > 0 ? -step : step;

    if (evt.shiftKey) {
      increment *= 10;
    }

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

    if (evt.shiftKey) {
      increment *= 10;
    }

    evt.target.value = (parseFloat(value) + increment).toFixed(1);
    return onChange(evt);
  };

  const onArrowKeyClick = (direction) => {
    const input = inputRef.current;

    let key = null;

    if (direction === 'up') {
      key = 'ArrowUp';
    } else if (direction === 'down') {
      key = 'ArrowDown';
    }

    // Dispatch keyboard event to bind target and value then call existing onKeyDown handler
    const evt = new KeyboardEvent('keydown', {key: key});
    input.dispatchEvent(evt);

    onKeyDown(evt);
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

      <div className={style['number-input__buttons']}>
        <Button
          className={`${style['number-input__button']} ${style['number-input__button--up']}`}
          text={'Increase value'}
          isTextHidden={true}
          onBtnClick={() => onArrowKeyClick('up')}
        >
          <ArrowIcon/>
        </Button>
        <Button
          className={`${style['number-input__button']} ${style['number-input__button--down']}`}
          text={'Decrease value'}
          isTextHidden={true}
          onBtnClick={() => onArrowKeyClick('down')}
        >
          <ArrowIcon/>
        </Button>
      </div>

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
