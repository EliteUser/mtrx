import React from 'react';
import PropTypes from 'prop-types';
import style from './Primitive.module.scss';

import Button from '../Button';

import {ReactComponent as EyeIcon} from '../../../public/assets/icon-eye.svg';
import {ReactComponent as TrashIcon} from '../../../public/assets/icon-trash.svg';

const Primitive = (props) => {
  const {
    isLast,
    primitiveType,
    isHidden,
    isSelected,
    onPrimitiveSelected,
    onPrimitiveToggled,
    onPrimitiveRemoved
  } = props;

  let selectorStyle = [style['primitive__selector']];
  if (isSelected) {
    selectorStyle.push(style['primitive__selector--selected']);
  }
  if (isHidden) {
    selectorStyle.push(style['primitive__selector--hidden']);
  }
  selectorStyle = selectorStyle.join(' ');

  const toggleStyle = `${style['primitive__button']} ${isHidden ? style['primitive__button--active'] : ''}`.trim();

  return (
    <div className={style['primitive']}>
      <button
        className={selectorStyle}
        type="button"
        onClick={onPrimitiveSelected}>
        <p className={style['primitive__name']}>{primitiveType}</p>
      </button>

      <Button
        className={toggleStyle}
        text={'Toggle primitive'}
        isTextHidden={true}
        onBtnClick={onPrimitiveToggled}
      >
        <EyeIcon/>
      </Button>

      {
        !isLast ?
          <Button
            className={style['primitive__button']}
            text={'Remove primitive'}
            isTextHidden={true}
            onBtnClick={onPrimitiveRemoved}
          >
            <TrashIcon/>
          </Button> :
          null
      }

    </div>
  );
};

Primitive.propTypes = {};

export default Primitive;
