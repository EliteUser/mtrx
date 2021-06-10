import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import PrimitiveList from '../components/Primitive-list';
import {
  addPrimitive,
  selectPrimitive,
  removePrimitive,
  setProperty
} from '../store/actions';

const PrimitiveListContainer = (props) => {
  const {
    onPrimitiveAdded,
    onPrimitiveSelected,
    onPrimitiveRemoved,
    onPrimitiveToggle,
    ...rest
  } = props;

  const onAdded = (type) => useCallback(
    () => onPrimitiveAdded(type),
    []
  );

  return (
    <PrimitiveList
      {...rest}
      onPrimitiveAdded={onAdded}
      onPrimitiveSelected={onPrimitiveSelected}
      onPrimitiveRemoved={onPrimitiveRemoved}
      onPrimitiveToggle={onPrimitiveToggle}
    />
  );
};

PrimitiveListContainer.propTypes = {};

const mapStateToProps = (state) => {
  const {
    selectedPrimitiveId,
    primitives
  } = state.filter;

  return {
    selectedPrimitiveId,
    primitives
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onPrimitiveAdded: addPrimitive,
    onPrimitiveSelected: selectPrimitive,
    onPrimitiveRemoved: removePrimitive,
    onPrimitiveToggle: setProperty
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PrimitiveListContainer);
