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
    filterString,
    filterApplied
  } = props;

  const onSave = () => {
    return onSaveImage(filterString);
  };

  return (
    <ImageWorkarea
      onSaveImage={onSave}
      onTogglePreview={onTogglePreview}
      filterApplied={filterApplied}
    />
  );
};

ImageWorkareaContainer.propTypes = {
  onSaveImage: PropTypes.func,
  onTogglePreview: PropTypes.func,
  filterString: PropTypes.string,
  filterApplied: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const {
    filterString,
    filterApplied
  } = state.filter;
  return {
    filterString,
    filterApplied
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
