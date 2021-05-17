import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators, compose} from 'redux';
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
  primitives: PropTypes.array,
  updateCanvas: PropTypes.func
};

const mapStateToProps = (state) => {
  const {primitives} = state.filter;
  return {
    primitives
  };
};

export default compose(
  connect(mapStateToProps)
)(SvgFilterContainer);
