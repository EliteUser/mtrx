import React from 'react';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {setImageAndGoToEditor} from '../store/actions';

import FileButton from '../components/File-button';
import PropTypes from 'prop-types';

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
    onFileChange: (evt) => setImageAndGoToEditor(evt.target.files[0])(),
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps)
)(FileButtonContainer);
