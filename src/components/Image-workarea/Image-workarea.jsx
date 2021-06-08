import React from 'react';
import PropTypes from 'prop-types';
import style from './Image-workarea.module.scss';

import {useMediaQuery} from 'react-responsive';

import CanvasContainer from '../../containers/Canvas-container';
import SvgFilterContainer from '../../containers/Svg-filter-container';

import Button from '../Button';
import btnStyle from '../Button/Button.module.scss';
import {ReactComponent as SaveIcon} from '../../../public/assets/icon-download.svg';
import {ReactComponent as PreviewIcon} from '../../../public/assets/icon-preview.svg';
import {SCREEN_DT} from '../../config';

const ImageWorkarea = (props) => {
  const {
    onSaveImage,
    onTogglePreview,
    filterApplied
  } = props;

  const isDesktop = useMediaQuery({
    query: `(min-width: ${SCREEN_DT + 1}px)`
  });

  return (
    <div className={style['image-workarea']}>
      <div className={style['image-workarea__canvas']}>
        <CanvasContainer/>
        <SvgFilterContainer/>
      </div>

      <div className={style['image-workarea__save-btn']}>
        <Button
          onBtnClick={onSaveImage}
          text={isDesktop ? 'Save' : 'Save image'}
          isTextHidden={!isDesktop}
        >
          <SaveIcon/>
        </Button>
      </div>

      <div className={style['image-workarea__preview-btn']}>
        <Button
          className={filterApplied ? '' : btnStyle['btn--active']}
          onBtnClick={onTogglePreview}
          text={isDesktop ? 'Preview' : 'Toggle preview'}
          isTextHidden={!isDesktop}
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
