import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';

import {updateCanvas} from '../store/actions';

import SvgFilter from '../components/Svg-filter';

const SvgFilterContainer = (props) => {
  const {
    primitives,
    updateCanvas
  } = props;

  useEffect(() => {
    updateCanvas();
  }, [primitives]);

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCanvas: updateCanvas
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SvgFilterContainer);
