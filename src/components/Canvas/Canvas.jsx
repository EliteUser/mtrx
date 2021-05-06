import React from 'react';
import style from './Canvas.module.scss';

// eslint-disable-next-line react/display-name
const Canvas = React.forwardRef((props, ref) => (
  <canvas
    className={style['main-canvas']}
    ref={ref}
  />
));

export default Canvas;
