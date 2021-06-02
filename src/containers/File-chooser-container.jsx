import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FileChooser from '../components/File-chooser';
import {setImageFileAndGoToEditor} from '../store/actions';

const FileChooserContainer = (props) => {
  const {
    onFileChange,
    isDrop = false
  } = props;

  return (
    <FileChooser
      onFileChange={onFileChange}
      isDrop={isDrop}
    />
  );
};

FileChooserContainer.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  isDrop: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onFileChange: (evt) => {
      const file = evt.target ? evt.target.files[0] : evt[0];
      return setImageFileAndGoToEditor(file)();
    },
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps)
)(FileChooserContainer);
