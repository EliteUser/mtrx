import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Canvas from '../components/Canvas';
import {setImage, setRendering} from '../store/actions';

import Loader from '../components/Loader';
import {getScaleCoefficient} from '../utils/utils';

const CanvasContainer = (props) => {
  const canvasRef = useRef(null);

  const [initialSize, setInitialSize] = useState(null);
  const [repaintTimeout, setRepaintTimeout] = useState(null);

  const {
    imageFile,
    sourceImage,
    filterString,
    filterApplied,
    setImage,
    primitives,
    isRendering,
    setRendering
  } = props;

  useEffect(() => {
    const URLObj = window.URL || window.webkitURL;

    const image = new Image();
    image.src = URLObj.createObjectURL(imageFile);

    image.onload = () => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;

      setInitialSize({
        width,
        height
      });

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
      try {
        if (repaintTimeout) {
          clearTimeout(repaintTimeout);
        }

        if (sourceImage) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d', {alpha: false});

          const scale = getScaleCoefficient(initialSize.width, initialSize.height);

          canvas.width = initialSize.width / scale;
          canvas.height = initialSize.height / scale;

          ctx.filter = filterApplied ? filterString : 'none';
          ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);

          const paintTimeout = setTimeout(() => {
            setTimeout(() => {
              setRendering(true);

              setTimeout(() => {
                canvas.width = initialSize.width;
                canvas.height = initialSize.height;

                ctx.filter = filterApplied ? filterString : 'none';
                ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);

                setRendering(false);
              }, 20);
            }, 0);
          }, 700);

          setRepaintTimeout(paintTimeout);
        }
      } catch (err) {
        setRendering(false);
        console.log(err);
      }
    });
  }, [filterString, filterApplied, sourceImage, primitives]);

  return (
    <React.Fragment>
      {isRendering ? <Loader/> : null}
      <Canvas ref={canvasRef}/>
    </React.Fragment>
  );
};

CanvasContainer.propTypes = {
  imageFile: PropTypes.object,
  sourceImage: PropTypes.object,
  filterString: PropTypes.string,
  filterApplied: PropTypes.bool,
  primitives: PropTypes.array,
  setImage: PropTypes.func.isRequired,
  isRendering: PropTypes.bool,
  setRendering: PropTypes.func,
};

const mapStateToProps = (state) => {
  const {
    imageFile,
    sourceImage,
    isRendering
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
    primitives,
    isRendering
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setImage: setImage,
    setRendering: setRendering
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(CanvasContainer);
