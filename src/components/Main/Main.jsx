import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import style from './Main.module.scss';

import BigLogo from '../Big-logo';
import GithubLink from '../Github-link';
import FilterList from '../Filter-list';

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

const Main = (props) => {
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

  window.upd = updateCanvas;

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
      <BigLogo className={style['main__logo']}/>
      <p className={style['main__text']}>Press + and add image to start</p>
      <div className={style['main__wrapper']}>
        <GithubLink/>
      </div>
      <FilterList/>
      <input type="file" onChange={onFileChange}/>
      <button type="button" onClick={onSaveClick}>Save</button>
      <textarea name="filter" cols="30" rows="10" onInput={onFilterChange}
                value={filter}/>

      <Filter filter={filter} onChange={updateCanvas}/>
      <div>
        <canvas style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }} ref={canvasRef}/>
      </div>

    </div>
  );
};

Main.propTypes = {};

export default Main;
