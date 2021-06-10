import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ConvolveControls from '../components/Convolve-controls';
import {
  setProperty
} from '../store/actions';

const ConvolveControlsContainer = (props) => {
  const {
    primitive,
    ...rest
  } = props;

  return (
    <ConvolveControls
      primitive={primitive}
      {...rest}
    />
  );
};

ConvolveControlsContainer.propTypes = {
  primitive: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onPropertyChanged: setProperty
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps)
)(ConvolveControlsContainer);
