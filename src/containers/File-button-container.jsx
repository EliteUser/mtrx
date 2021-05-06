import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FileButton from '../components/File-button';
import {setImageFileAndGoToEditor} from '../store/actions';

const FileButtonContainer = (props) => {
  const {onFileChange} = props;

  return (
    <FileButton onFileChange={onFileChange}/>
  );
};

FileButtonContainer.propTypes = {
  onFileChange: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onFileChange: (evt) => setImageFileAndGoToEditor(evt.target.files[0])(),
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps)
)(FileButtonContainer);
