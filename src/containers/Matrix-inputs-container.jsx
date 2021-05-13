import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MatrixInputs from '../components/Matrix-inputs';
import {setKernelMatrixElement} from '../store/actions';

const MatrixInputsContainer = (props) => {
  const {
    id,
    kernelX,
    kernelY,
    kernelMatrix,
    onKernelMatrixElementChange,
    ...rest
  } = props;

  return (
    <MatrixInputs
      id={id}
      kernelX={kernelX}
      kernelY={kernelY}
      kernelMatrix={kernelMatrix}
      onKernelMatrixElementChange={onKernelMatrixElementChange}
      {...rest}
    />
  );
};

MatrixInputsContainer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  kernelX: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  kernelY: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  kernelMatrix: PropTypes.array,
  onKernelMatrixElementChange: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onKernelMatrixElementChange: setKernelMatrixElement,
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps)
)(MatrixInputsContainer);
