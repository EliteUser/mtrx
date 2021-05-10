import React from 'react';
import PropTypes from 'prop-types';
import style from './Image-workarea.module.scss';

import CanvasContainer from '../../containers/Canvas-container';
import SvgFilterContainer from '../../containers/Svg-filter-container';

import Button from '../Button';
import btnStyle from '../Button/Button.module.scss';
import {ReactComponent as SaveIcon} from '../../../public/assets/icon-download.svg';
import {ReactComponent as PreviewIcon} from '../../../public/assets/icon-preview.svg';

const ImageWorkarea = (props) => {
  const {
    onSaveImage,
    onTogglePreview,
    filterApplied
  } = props;

  return (
    <div className={style['image-workarea']}>
      <div className={style['image-workarea__canvas']}>
        <CanvasContainer/>
        <SvgFilterContainer/>
      </div>

      <div className={style['image-workarea__save-btn']}>
        <Button
          onBtnClick={onSaveImage}
          text={'Save image'}
          isTextHidden={true}
        >
          <SaveIcon/>
        </Button>
      </div>

      <div className={style['image-workarea__preview-btn']}>
        <Button
          className={filterApplied ? '' : btnStyle['btn--active']}
          onBtnClick={onTogglePreview}
          text={'Toggle preview'}
          isTextHidden={true}
        >
          <PreviewIcon/>
        </Button>
      </div>
    </div>
  );
};

ImageWorkarea.propTypes = {
  onSaveImage: PropTypes.func,
  onTogglePreview: PropTypes.func,
  filterApplied: PropTypes.bool,
};

export default ImageWorkarea;
