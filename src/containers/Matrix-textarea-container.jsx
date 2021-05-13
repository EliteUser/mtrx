import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MatrixTextarea from '../components/Matrix-textarea';
import {formatMatrix} from '../store/actions';
import {getFormattedMatrixString} from '../utils/utils';

const MatrixTextareaContainer = (props) => {
  const {
    kernelMatrix,
    kernelX,
    primitiveId,
    onMatrixFormat,
    ...rest
  } = props;

  const matrixString = getFormattedMatrixString(kernelMatrix, kernelX);
  const onFormat = () => {
    return onMatrixFormat(kernelMatrix, primitiveId);
  };

  return (
    <MatrixTextarea
      value={matrixString}
      onMatrixFormat={onFormat}
      {...rest}
    />
  );
};

MatrixTextareaContainer.propTypes = {
  kernelMatrix: PropTypes.array,
  kernelX: PropTypes.number,
  primitiveId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMatrixFormat: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onMatrixFormat: formatMatrix
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps)
)(MatrixTextareaContainer);
