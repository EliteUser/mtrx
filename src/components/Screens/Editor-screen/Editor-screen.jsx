import React from 'react';
import PropTypes from 'prop-types';
import style from './Editor-screen.module.scss';

import StyledTabs from './Styled-tabs';
import StyledTab from './Styled-tab';
import EditorTabpanel from '../../Editor-tabpanel';

import {ReactComponent as TextLogo} from '../../../../public/assets/logo-t.svg';

const EditorScreen = (props) => {
  const {
    activeTab,
    tabs,
    onTabChange
  } = props;

  const onTabClick = (evt, tabName) => {
    onTabChange(tabName);
  };

  return (
    <div className={style['editor']}>
      {
        tabs.map((tabName) => {
          return (
            <EditorTabpanel key={tabName} value={activeTab} index={tabName} label={tabName}>
              {}
            </EditorTabpanel>
          );
        })
      }
      <StyledTabs
        className={style['editor-tabs']}
        value={activeTab}
        onChange={onTabClick}
        variant="fullWidth"
        aria-label="Application tabs">
        {
          tabs.map((tabName) => {
            const name = tabName === 'mtrx' ? <TextLogo/> : tabName;
            return (
              <StyledTab
                className={style['editor-tab']}
                key={tabName}
                label={name}
                value={tabName}
                aria-controls={`tabpanel-${tabName}`}
                id={`tab-${tabName}`}
              />
            );
          })
        }
      </StyledTabs>
    </div>
  );


  /*const canvasRef = useRef(null);

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
  );*/
};

EditorScreen.propTypes = {
  activeTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  onTabChange: PropTypes.func
};

export default EditorScreen;
