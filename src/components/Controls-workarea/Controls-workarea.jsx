import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Controls-workarea.module.scss';
import btnStyle from '../Button/Button.module.scss';

import PrimitiveListContainer from '../../containers/Primitive-list-container';
import ConvolveControlsContainer from '../../containers/Convolve-controls-container';

import {ReactComponent as AdvancedModeIcon} from '../../../public/assets/icon-expand.svg';
import {ReactComponent as StandardModeIcon} from '../../../public/assets/icon-hide.svg';
import {ReactComponent as ResetIcon} from '../../../public/assets/icon-reset.svg';
import {ReactComponent as ListIcon} from '../../../public/assets/icon-list.svg';
import {ReactComponent as Logoicon} from '../../../public/assets/logo-i.svg';

import Button from '../Button';
import {PrimitiveType} from '../../config/config';
import MatrixControls from '../Matrix-controls';

const ControlsWorkarea = (props) => {
  const {
    primitive,
    onPropertyChanged,
    onReset
  } = props;

  const {
    id,
    primitiveType
  } = primitive;

  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const [isPrimitivesList, setIsPrimitivesList] = useState(false);

  const onModeChange = () => {
    setIsAdvancedMode(!isAdvancedMode);
  };

  const onListToggle = () => {
    setIsPrimitivesList(!isPrimitivesList);
  };

  return (
    <div className={style['controls-workarea']}>
      {
        isPrimitivesList ?
          <div className={style['controls-workarea__snap-container']}>
            <PrimitiveListContainer/>

            <div className={style['controls-workarea__buttons']}>
              <Button
                isTextHidden={true}
                text={'Go to filter settings'}
                className={btnStyle['btn--accent']}
                onBtnClick={onListToggle}
                title={'Go to filter settings'}
              >
                <Logoicon/>
              </Button>
            </div>
          </div> :

          <React.Fragment>
            {
              primitiveType === PrimitiveType.convolveMatrix ?
                <div
                  className={`${style['controls-workarea__snap-container']} ${style['controls-workarea__snap-container--first']}`}
                >
                  <ConvolveControlsContainer
                    primitive={primitive}
                  />
                </div> : null
            }

            <div
              className={`${style['controls-workarea__snap-container']} ${style['controls-workarea__snap-container--second']}`}
            >

              <MatrixControls
                primitive={primitive}
                onPropertyChanged={onPropertyChanged}
                isAdvancedMode={isAdvancedMode}
              />


              <div className={style['controls-workarea__buttons']}>
                <Button
                  isTextHidden={true}
                  text={'Reset filter settings'}
                  className={btnStyle['btn--accent']}
                  onBtnClick={() => onReset(id)}
                  title={'Reset filter settings'}
                >
                  <ResetIcon/>
                </Button>

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

                <Button
                  isTextHidden={true}
                  text={'Go to primitive list'}
                  className={btnStyle['btn--accent']}
                  onBtnClick={onListToggle}
                  title={'Go to primitive list'}
                >
                  <ListIcon/>
                </Button>
              </div>
            </div>

          </React.Fragment>
      }
    </div>
  );
};

ControlsWorkarea.propTypes = {};

export default ControlsWorkarea;
