import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ImageWorkarea from '../components/Image-workarea';
import {saveImage, toggleFilter} from '../store/actions';

const ImageWorkareaContainer = (props) => {
  const {
    onSaveImage,
    onTogglePreview,
    filterApplied
  } = props;

  return (
    <ImageWorkarea
      onSaveImage={onSaveImage}
      onTogglePreview={onTogglePreview}
      filterApplied={filterApplied}
    />
  );
};

ImageWorkareaContainer.propTypes = {
  onSaveImage: PropTypes.func,
  onTogglePreview: PropTypes.func,
  filterApplied: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    filterApplied: !!state.filter.filterString
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSaveImage: saveImage,
    onTogglePreview: toggleFilter
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ImageWorkareaContainer);
