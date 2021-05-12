import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Controls-workarea.module.scss';
import btnStyle from '../Button/Button.module.scss';

import Input from '../Input';
import MatrixTextareaContainer from '../../containers/Matrix-textarea-container';
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

  return (
    <div className={style['controls-workarea']}>
      <div className={style['controls-workarea__snap-container']}>

        <div className={style['controls-workarea__controls']}>

          <div className={style['controls-workarea__matrix-size']}>
            <p className={style['controls-workarea__label']}>Matrix Size</p>
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
            <span>X</span>
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

        </div>

      </div>

      <div className={style['controls-workarea__snap-container']}>
        {
          isAdvancedMode ?
            <div className={`${style['controls-workarea__matrix-textarea']}`}>
              <MatrixTextareaContainer
                value={kernelMatrix}
                kernelX={kernelX}
                primitiveId={id}
                name={'matrix'}
                onChange={(evt) => onKernelMatrixChange(evt.target.value, id)}
              />
            </div> :

            <div className={`${style['controls-workarea__matrix-inputs']}`}>
              <MatrixInputsContainer
                id={id}
                kernelX={kernelX}
                kernelY={kernelY}
                kernelMatrix={kernelMatrix}
              />
            </div>
        }

        <div className={style['controls-workarea__buttons']}>
          <Button
            isTextHidden={true}
            text={'Change Matrix Mode'}
            className={btnStyle['btn--accent']}
            onBtnClick={onModeChange}
            title={isAdvancedMode ? 'Standard Mode' : 'Advanced Mode'}
          >
            {
              isAdvancedMode ?
                <StandardModeIcon/> :
                <AdvancedModeIcon/>
            }
          </Button>


        </div>

      </div>

    </div>
  );
};

ControlsWorkarea.propTypes = {

//TODO REFACTOR PROPS DUPLICATE TO ...REST
};

export default ControlsWorkarea;
