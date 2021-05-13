import React from 'react';
import PropTypes from 'prop-types';
import style from './Matrix-inputs.module.scss';

import Input from '../Input';

const MatrixInputs = (props) => {
  const {
    id,
    kernelX,
    kernelY,
    kernelMatrix,
    onKernelMatrixElementChange
  } = props;

  const onChange = (evt) => {
    const value = evt.target.value;
    const index = evt.target.getAttribute('id');

    return onKernelMatrixElementChange(value, id, index);
  };

  const matrixStyles = {
    gridTemplateColumns: `repeat(${kernelX}, 60px)`,
    gridTemplateRows: `repeat(${kernelY}, 40px)`
  };

  return (
    <div
      className={style['matrix-inputs']}
      style={matrixStyles}>
      {
        Array(kernelX * kernelY)
          .fill(null)
          .map((el, index) => {
            return (
              <Input
                key={index}
                id={index}
                step={0.1}
                value={kernelMatrix[index]}
                onChange={onChange}
              />
            );
          })
      }
    </div>
  );
};

MatrixInputs.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  kernelX: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  kernelY: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  kernelMatrix: PropTypes.array,
  onKernelMatrixElementChange: PropTypes.func
};

export default MatrixInputs;
