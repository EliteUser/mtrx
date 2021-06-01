import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ImageWorkarea from '../components/Image-workarea';
import {saveImage, setRendering, toggleFilter} from '../store/actions';
import Loader from '../components/Loader';

const ImageWorkareaContainer = (props) => {
  const {
    onSaveImage,
    onTogglePreview,
    filterString,
    filterApplied,
    setRendering,
    isRendering
  } = props;

  const onSave = () => {
    setTimeout(() => {
      setRendering(true);
    }, 0);

    setTimeout(() => {
      onSaveImage(filterString);
      setRendering(false);
    }, 20);
  };

  return (
    <React.Fragment>
      {isRendering ? <Loader/> : null}
      <ImageWorkarea
        onSaveImage={onSave}
        onTogglePreview={onTogglePreview}
        filterApplied={filterApplied}
      />
    </React.Fragment>
  );
};

ImageWorkareaContainer.propTypes = {
  onSaveImage: PropTypes.func,
  onTogglePreview: PropTypes.func,
  filterString: PropTypes.string,
  filterApplied: PropTypes.bool,
  setRendering: PropTypes.func,
  isRendering: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const {
    filterString,
    filterApplied
  } = state.filter;

  const isRendering = state.image.isRendering;
  return {
    filterString,
    filterApplied,
    isRendering
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSaveImage: saveImage,
    onTogglePreview: toggleFilter,
    setRendering: setRendering
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ImageWorkareaContainer);
