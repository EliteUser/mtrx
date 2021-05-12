import React from 'react';
import PropTypes from 'prop-types';
import style from './Matrix-inputs.module.scss';

import Input from '../Input';

const MatrixInputs = (props) => {
  const {
    id,
    sizeX,
    sizeY,
    matrix,
    onKernelMatrixElementChange
  } = props;

  const matrixArray = matrix.trimRight().split(/\r|\s/g);

  const onChange = (evt) => {
    const value = evt.target.value;
    const index = evt.target.getAttribute('id');

    return onKernelMatrixElementChange(value, id, index);
  };

  const matrixStyles = {
    gridTemplateColumns: `repeat(${sizeX}, 60px)`,
    gridTemplateRows: `repeat(${sizeY}, 40px)`
  };

  return (
    <div
      className={style['matrix-inputs']}
      style={matrixStyles}>
      {
        Array(sizeX * sizeY)
          .fill(null)
          .map((el, index) => {
            return (
              <Input
                key={index}
                id={index}
                step={0.1}
                value={matrixArray[index]}
                onChange={onChange}
              />
            );
          })
      }
    </div>
  );
};

MatrixInputs.propTypes = {};

export default MatrixInputs;
