import React from 'react';
import PropTypes from 'prop-types';
import style from './File-Button.module.scss';

import {ReactComponent as PhotoIcon} from '../../../public/assets/icon-photo.svg';

const FileButton = (props) => {
  const {onFileChange} = props;

  return (
    <div className={style['file-button']}>
      <label htmlFor="file">
        <PhotoIcon/>
      </label>
      <input
        className="visually-hidden"
        type="file"
        id="file"
        name="file"
        onChange={onFileChange}
        aria-label='Choose image to edit'/>
    </div>
  );
};

FileButton.propTypes = {
  onFileChange: PropTypes.func.isRequired
};

export default FileButton;


