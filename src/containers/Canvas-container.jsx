import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Canvas from '../components/Canvas';
import {setImage, setCanvasRef, removeCanvasRef} from '../store/actions';

const CanvasContainer = (props) => {
  const canvasRef = useRef(null);
  const {
    imageFile,
    sourceImage,
    filterString,
    setImage,
    setRef,
    removeRef,
    primitives
  } = props;

  useEffect(() => {
    setRef(canvasRef);

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
      removeRef();
      setImage(null);
    });
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (sourceImage) {
        const width = sourceImage.naturalWidth;
        const height = sourceImage.naturalHeight;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.filter = filterString ? filterString : 'none';
        ctx.drawImage(sourceImage, 0, 0, width, height);
      }
    });
  }, [filterString, sourceImage, primitives]);

  return (
    <Canvas ref={canvasRef}/>
  );
};

CanvasContainer.propTypes = {
  imageFile: PropTypes.object,
  sourceImage: PropTypes.object,
  filterString: PropTypes.string,
  primitives: PropTypes.array,
  setImage: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  removeRef: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    imageFile,
    sourceImage,
  } = state.image;

  const {
    filterString,
    primitives
  } = state.filter;
  return {
    imageFile,
    sourceImage,
    filterString,
    primitives
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setImage: setImage,
    setRef: setCanvasRef,
    removeRef: removeCanvasRef
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(CanvasContainer);
