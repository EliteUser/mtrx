import React from 'react';
import PropTypes from 'prop-types';
import style from './Matrix-textarea.module.scss';

import Button from '../Button';
import {ReactComponent as ReformatIcon} from '../../../public/assets/icon-reformat.svg';
import btnStyle from '../Button/Button.module.scss';

const MatrixTextarea = (props) => {
  const {
    onMatrixFormat,
    ...rest
  } = props;

  return (
    <div className={style['matrix-textarea']}>
      <textarea
        className={style['matrix-textarea__textarea']}
        {...rest}
      />

      <div className={style['matrix-textarea__buttons']}>
        <Button
          onBtnClick={onMatrixFormat}
          text={'Format matrix input'}
          isTextHidden={true}
          className={`${style['matrix-textarea__btn']} ${btnStyle['btn--accent']}`}
          title={'Format matrix input'}
        >
          {
            <ReformatIcon/>
          }
        </Button>
      </div>
    </div>
  );
};

MatrixTextarea.propTypes = {
  onMatrixFormat: PropTypes.func
};

export default MatrixTextarea;
