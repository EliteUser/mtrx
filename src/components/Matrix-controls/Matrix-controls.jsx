import React from 'react';
import PropTypes from 'prop-types';
import style from './Matrix-controls.module.scss';

import MatrixTextareaContainer from '../../containers/Matrix-textarea-container';
import MatrixInputsContainer from '../../containers/Matrix-inputs-container';

const MatrixControls = (props) => {
  const {
    primitive: {
      id,
      kernelX,
      kernelY,
      kernelMatrix,
    },
    onPropertyChanged,
    isAdvancedMode
  } = props;

  return (
    <React.Fragment>
      {
        isAdvancedMode ?
          <div className={`${style['matrix-controls__textarea']}`}>
            <MatrixTextareaContainer
              kernelMatrix={kernelMatrix}
              kernelX={kernelX}
              primitiveId={id}
              name={'matrix'}
              onChange={(evt) => onPropertyChanged('kernelMatrix', evt.target.value, id)}
            />
          </div> :

          <div className={`${style['matrix-controls__inputs']}`}>
            <MatrixInputsContainer
              id={id}
              kernelX={kernelX}
              kernelY={kernelY}
              kernelMatrix={kernelMatrix}
            />
          </div>
      }
    </React.Fragment>
  );
};

MatrixControls.propTypes = {

};

export default MatrixControls;
