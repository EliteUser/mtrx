import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import style from './File-chooser.module.scss';

import {useDropzone} from 'react-dropzone';

import {ReactComponent as PhotoIcon} from '../../../public/assets/icon-photo.svg';

const FileChooser = (props) => {
  const {
    onFileChange,
    isDrop = false
  } = props;

  const chooserStyle = `${[style['file-chooser']]} ${isDrop ? style['file-chooser--dropzone'] : ''}`.trim();

  let rootProps = [];
  let inputProps = [];
  let dragActive = false;

  if (isDrop) {
    const onDrop = useCallback((acceptedFiles) => {
      onFileChange(acceptedFiles);
    }, []);

    const {
      getRootProps,
      getInputProps,
      isDragActive
    } = useDropzone({onDrop});

    rootProps = getRootProps();
    inputProps = getInputProps();
    dragActive = isDragActive;

    delete rootProps.tabIndex;
    delete rootProps.onClick;
    delete inputProps.tabIndex;
    delete inputProps.style;
  }

  const labelStyle = `${style['file-chooser__label']} ${dragActive ? style['file-chooser__label--active'] : ''}`.trim();

  return (
    <div className={chooserStyle} {...rootProps}>
      <input
        className={`${style['file-chooser__input']} visually-hidden`}
        type="file"
        id="file"
        name="file"
        onChange={!isDrop ? onFileChange : null}
        aria-label='Choose image to edit'
        {...inputProps}
      />
      <label className={labelStyle} htmlFor="file">
        {!isDrop ? <PhotoIcon/> : null}
      </label>
    </div>
  );
};

FileChooser.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  isDrop: PropTypes.bool,
};

export default FileChooser;


