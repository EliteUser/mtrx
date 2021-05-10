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
    onKernelMatrixElementChange
  } = props;

  return (
    <MatrixInputs
      id={id}
      sizeX={kernelX}
      sizeY={kernelY}
      matrix={kernelMatrix}
      onKernelMatrixElementChange={onKernelMatrixElementChange}
    />
  );
};

MatrixInputsContainer.propTypes = {
 // TODO
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onKernelMatrixElementChange: setKernelMatrixElement,
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps)
)(MatrixInputsContainer);
