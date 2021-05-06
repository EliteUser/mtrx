import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Canvas from '../components/Canvas';
import {setImage, setCanvasRef, removeCanvasRef} from '../store/actions';

const CanvasContainer = (props) => {
  const {
    imageFile,
    setImage,
    setRef,
    removeRef
  } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    setRef(canvasRef);

    const URLObj = window.URL || window.webkitURL;

    const image = new Image();
    image.src = URLObj.createObjectURL(imageFile);

    image.onload = () => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = width;
      canvas.height = height;

      // TODO Filter from state
      ctx.filter = 'url(#filter)';
      ctx.drawImage(image, 0, 0, width, height);

      setImage(image);
    };

    return (() => {
      removeRef();
      setImage(null);
    });
  }, []);

  return (
    <Canvas ref={canvasRef}/>
  );
};

CanvasContainer.propTypes = {
  imageFile: PropTypes.object,
  setImage: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  removeRef: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {imageFile} = state.image;
  return {
    imageFile
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
