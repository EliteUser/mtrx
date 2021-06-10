import React from 'react';
import PropTypes from 'prop-types';
import style from './Convolve-controls.module.scss';

import Input from '../Input';

const ConvolveControls = (props) => {
  const {
    primitive: {
      id,
      kernelX,
      kernelY,
      divisor,
      bias,
    },
    onPropertyChanged
  } = props;

  return (
    <div className={style['convolve-controls']}>

      <div className={style['convolve-controls__matrix-size']}>
        <p className={style['convolve-controls__label']}>Matrix Size</p>
        <Input
          styleName={'integer'}
          id={'kernelX'}
          inputMode={'number'}
          step={1}
          min={1}
          max={10}
          value={kernelX}
          onChange={(evt) => onPropertyChanged('kernelX', evt.target.value, id)}
        />
        <span>X</span>
        <Input
          styleName={'integer'}
          id={'kernelY'}
          inputMode={'number'}
          step={1}
          min={1}
          max={10}
          value={kernelY}
          onChange={(evt) => onPropertyChanged('kernelY', evt.target.value, id)}
        />
      </div>

      <Input
        id={'divisor'}
        label={'Divisor'}
        step={0.1}
        value={divisor}
        onChange={(evt) => onPropertyChanged('divisor', evt.target.value, id)}
      />

      <Input
        id={'bias'}
        label={'Bias'}
        step={0.1}
        value={bias}
        onChange={(evt) => onPropertyChanged('bias', evt.target.value, id)}
      />

    </div>
  );
};

ConvolveControls.propTypes = {};

export default ConvolveControls;
