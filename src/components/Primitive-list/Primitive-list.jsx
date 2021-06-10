import React from 'react';
import PropTypes from 'prop-types';
import style from './Primitive-list.module.scss';

import Primitive from '../Primitive';
import Button from '../Button';

import {ReactComponent as PlusIcon} from '../../../public/assets/icon-plus.svg';
import {PrimitiveType} from '../../config/config';
import btnStyle from '../Button/Button.module.scss';

const PrimitiveList = (props) => {
  const {
    selectedPrimitiveId,
    primitives,
    onPrimitiveSelected,
    onPrimitiveAdded,
    onPrimitiveRemoved,
    onPrimitiveToggle
  } = props;

  const togglePrimitive = (value, id) => {
    return () => onPrimitiveToggle('visible', value, id);
  };

  return (
    <div className={style['primitives']}>

      <div className={style['primitives__wrapper']}>
        <Button
          className={`${style['primitives__button']} ${btnStyle['btn--accent']}`}
          onBtnClick={onPrimitiveAdded(PrimitiveType.convolveMatrix)}
          text={'Convolve matrix'}
          isTextHidden={false}
        >
          <PlusIcon/>
        </Button>

        <Button
          className={`${style['primitives__button']} ${btnStyle['btn--accent']}`}
          onBtnClick={onPrimitiveAdded(PrimitiveType.colorMatrix)}
          text={'Color matrix'}
          isTextHidden={false}
        >
          <PlusIcon/>
        </Button>
      </div>

      <ul className={style['primitives__list']}>
        {
          primitives.map(((primitive) => {
            const {
              id,
              visible,
              ...rest
            } = primitive;

            return (
              <li key={id} className={style['primitives__item']}>
                <Primitive
                  isLast={primitives.length === 1}
                  isHidden={!visible}
                  isSelected={id === selectedPrimitiveId}
                  onPrimitiveSelected={() => onPrimitiveSelected(id)}
                  onPrimitiveToggled={togglePrimitive(!visible, id)}
                  onPrimitiveRemoved={() => onPrimitiveRemoved(id)}
                  {...rest}
                />
              </li>
            );
          }))
        }
      </ul>

    </div>
  );
};

PrimitiveList.propTypes = {
  primitives: PropTypes.array,
};

export default PrimitiveList;
