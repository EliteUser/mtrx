import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MatrixTextarea from '../components/Matrix-textarea';
import {formatMatrix} from '../store/actions';

const MatrixTextareaContainer = (props) => {
  const {
    value,
    kernelX,
    primitiveId,
    onMatrixFormat,
    ...rest
  } = props;

  const onFormat = () => {
    return onMatrixFormat(value, kernelX, primitiveId);
  };

  return (
    <MatrixTextarea
      value={value}
      onMatrixFormat={onFormat}
      {...rest}
    />
  );
};

MatrixTextareaContainer.propTypes = {
  value: PropTypes.string,
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
