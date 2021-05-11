import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ControlsWorkarea from '../components/Controls-workarea';
import {setKernelX, setKernelY, setKernelMatrix, setDivisor, setBias} from '../store/actions';

const ControlsWorkareaContainer = (props) => {
  const {
    primitive,
    onKernelXChange,
    onKernelYChange,
    onKernelMatrixChange,
    onDivisorChange,
    onBiasChange
  } = props;
  return (
    <ControlsWorkarea
      primitive={primitive}
      onKernelXChange={onKernelXChange}
      onKernelYChange={onKernelYChange}
      onKernelMatrixChange={onKernelMatrixChange}
      onDivisorChange={onDivisorChange}
      onBiasChange={onBiasChange}
    />
  );
};

ControlsWorkareaContainer.propTypes = {

};

const mapStateToProps = (state) => {
  const selectedPrimitiveIndex = state.filter.primitives.findIndex(({id}) => id === state.filter.selectedPrimitive);
  return {
    primitive: state.filter.primitives[selectedPrimitiveIndex]
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onKernelXChange: setKernelX,
    onKernelYChange: setKernelY,
    onKernelMatrixChange: setKernelMatrix,
    onDivisorChange: setDivisor,
    onBiasChange: setBias
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ControlsWorkareaContainer);