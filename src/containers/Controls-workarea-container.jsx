import React from 'react';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ControlsWorkarea from '../components/Controls-workarea';
import {
  setProperty,
  resetMatrix
} from '../store/actions';

const ControlsWorkareaContainer = (props) => {
  return (
    <ControlsWorkarea {...props}/>
  );
};

const mapStateToProps = (state) => {
  const selectedPrimitiveIndex = state.filter.primitives.findIndex(({id}) => id === state.filter.selectedPrimitiveId);

  return {
    primitive: state.filter.primitives[selectedPrimitiveIndex]
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onPropertyChanged: setProperty,
    onReset: resetMatrix,
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ControlsWorkareaContainer);
