import React from 'react';
import PropTypes from 'prop-types';

import {compose} from 'redux';
import {connect} from 'react-redux';

import SvgFilter from '../components/Svg-filter';

const SvgFilterContainer = (props) => {
  const {
    primitives
  } = props;

  return (
    <SvgFilter primitives={primitives}/>
  );
};

SvgFilterContainer.propTypes = {
  primitives: PropTypes.array
};

const mapStateToProps = (state) => {
  const {primitives} = state.filter;
  const visiblePrimitives = primitives.filter(({visible}) => visible);

  return {
    primitives: visiblePrimitives
  };
};

export default compose(
  connect(mapStateToProps)
)(SvgFilterContainer);
