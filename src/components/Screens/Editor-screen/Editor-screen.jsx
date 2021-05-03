import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import style from './Editor-screen.module.scss';

import FilterList from '../../Filter-list';

const Filter = (props) => {
  const {
    filter,
    onChange
  } = props;

  useEffect(() => {
    onChange();
  }, [filter]);

  return (
    <svg className="visually-hidden" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <filter id="filter" filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feConvolveMatrix order="3 3" kernelMatrix={filter} divisor="9" bias="0" targetX="0" targetY="0"
                            edgeMode="duplicate" preserveAlpha="true" x="0%" y="0%"
                            in="SourceGraphic" result="convolveMatrix"/>
        </filter>
      </defs>
    </svg>
  );
};

const EditorScreen = () => {
  const canvasRef = useRef(null);

  const [imageFile, setImageFile] = useState(null);
  const [sourceImage, setSourceImage] = useState(null);
  const [filter, setFilter] = useState('1 1 1 1 1 1 1 1 1');

  const onFileChange = (evt) => {
    const URLObj = window.URL || window.webkitURL;
    const file = evt.target.files[0];
    setImageFile(file);

    const image = new Image();
    image.src = URLObj.createObjectURL(file);

    image.onload = () => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = width;
      canvas.height = height;

      ctx.filter = 'url(#filter)';
      ctx.drawImage(image, 0, 0, width, height);

      setSourceImage(image);
    };
  };

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && sourceImage) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(sourceImage, 0, 0, sourceImage.naturalWidth, sourceImage.naturalHeight);
    }
  };

  const onFilterChange = (evt) => {
    setFilter(evt.target.value);

    updateCanvas();
  };


  const onSaveClick = () => {
    const download = (href, name) => {
      const link = document.createElement('a');
      link.download = name;
      link.href = href;
      link.click();
      link.remove();
    };

    canvasRef.current.toBlob((blob) => {
      const URLObj = window.URL || window.webkitURL;
      const jpeg = URLObj.createObjectURL(blob);
      const name = 'edited.jpeg';

      download(jpeg, name);
    }, 'image/jpeg', 1);
  };

  return (
    <div className={style['main']}>


      <input type="file" onChange={onFileChange}/>
      <button type="button" onClick={onSaveClick}>Save</button>
      <textarea
        name="filter"
        cols="30"
        rows="10"
        onInput={onFilterChange}
        value={filter}/>
      <Filter filter={filter} onChange={updateCanvas}/>
      <div style={{maxHeight: "500px"}}>
        <canvas style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }} ref={canvasRef}/>
      </div>
      <FilterList/>
    </div>
  );
};

EditorScreen.propTypes = {};

export default EditorScreen;
