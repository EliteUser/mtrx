import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Controls-workarea.module.scss';
import btnStyle from '../Button/Button.module.scss';

import {getFormattedMatrix} from '../../utils/utils';
import Input from '../Input';
import Textarea from '../Textarea';
import MatrixInputsContainer from '../../containers/Matrix-inputs-container';

import {ReactComponent as AdvancedModeIcon} from '../../../public/assets/icon-expand.svg';
import {ReactComponent as StandardModeIcon} from '../../../public/assets/icon-hide.svg';
import Button from '../Button';


const ControlsWorkarea = (props) => {
  const {
    primitive: {
      id,
      kernelX,
      kernelY,
      kernelMatrix,
      divisor,
      bias,
    },
    onKernelXChange,
    onKernelYChange,
    onKernelMatrixChange,
    onDivisorChange,
    onBiasChange,
  } = props;

  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const onModeChange = () => {
    setIsAdvancedMode(!isAdvancedMode);
  };

  const formattedMatrix = getFormattedMatrix(kernelMatrix, kernelX);

  return (
    <div className={style['controls-workarea']}>
      <div className={style['controls-workarea__buttons']}>
        <Button
          isTextHidden={true}
          text={'Change Matrix Mode'}
          className={btnStyle['btn--accent']}
          onBtnClick={onModeChange}
        >
          {
            isAdvancedMode ?
              <StandardModeIcon/> :
              <AdvancedModeIcon/>
          }
        </Button>
      </div>

      <div className={style['controls-workarea__matrix-size']}>
        <p className={style['controls-workarea__label']}>Matrix Size</p>
        <div className={style['controls-workarea__wrapper']}>
          <Input
            styleName={'integer'}
            id={'kernelX'}
            inputMode={'number'}
            step={1}
            min={1}
            max={10}
            value={kernelX}
            onChange={(evt) => onKernelXChange(evt.target.value, id)}
          />
          <Input
            styleName={'integer'}
            id={'kernelY'}
            inputMode={'number'}
            step={1}
            min={1}
            max={10}
            value={kernelY}
            onChange={(evt) => onKernelYChange(evt.target.value, id)}
          />
        </div>
      </div>
      <Input
        className={style['controls-workarea__input--divisor']}
        label={'Divisor'}
        step={0.1}
        value={divisor}
        onChange={(evt) => onDivisorChange(evt.target.value, id)}
      />
      <Input
        className={style['controls-workarea__input--bias']}
        label={'Bias'}
        step={0.1}
        value={bias}
        onChange={(evt) => onBiasChange(evt.target.value, id)}
      />

      <div className={style['controls-workarea__matrix']}>
        {
          isAdvancedMode ?
            <Textarea
              value={kernelMatrix}
              name={'matrix'}
              onChange={(evt) => onKernelMatrixChange(evt.target.value, id)}
            /> :
            <MatrixInputsContainer
              id={id}
              kernelX={kernelX}
              kernelY={kernelY}
              kernelMatrix={kernelMatrix}
            />
        }
      </div>
    </div>
  );
};

ControlsWorkarea.propTypes = {

  //TODO
};

export default ControlsWorkarea;
