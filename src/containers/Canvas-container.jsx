import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Canvas from '../components/Canvas';
import {setImage} from '../store/actions';

const CanvasContainer = (props) => {
  const canvasRef = useRef(null);
  const {
    imageFile,
    sourceImage,
    filterString,
    filterApplied,
    setImage,
    primitives
  } = props;

  useEffect(() => {
    const URLObj = window.URL || window.webkitURL;

    const image = new Image();
    image.src = URLObj.createObjectURL(imageFile);

    image.onload = () => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;

      const canvas = canvasRef.current;

      canvas.width = width;
      canvas.height = height;

      setImage(image);
    };

    return (() => {
      setImage(null);
    });
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (sourceImage) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', {alpha: false});

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.filter = filterApplied ? filterString : 'none';
        ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
      }
    });
  }, [filterString, filterApplied, sourceImage, primitives]);

  return (
    <Canvas ref={canvasRef}/>
  );
};

CanvasContainer.propTypes = {
  imageFile: PropTypes.object,
  sourceImage: PropTypes.object,
  filterString: PropTypes.string,
  filterApplied: PropTypes.bool,
  primitives: PropTypes.array,
  setImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    imageFile,
    sourceImage,
  } = state.image;

  const {
    filterString,
    filterApplied,
    primitives
  } = state.filter;
  return {
    imageFile,
    sourceImage,
    filterString,
    filterApplied,
    primitives
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setImage: setImage,
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(CanvasContainer);
