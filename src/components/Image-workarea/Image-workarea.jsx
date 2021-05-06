import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import style from './Image-workarea.module.scss';

import CanvasContainer from '../../containers/Canvas-container';
import SvgFilterContainer from '../../containers/Svg-filter-container';

const ImageWorkarea = (props) => {
  return (
    <div className={style['image-workarea']}>
      <div>
        <CanvasContainer />
        <SvgFilterContainer/>
      </div>
    </div>
  );
};

ImageWorkarea.propTypes = {};

export default ImageWorkarea;
