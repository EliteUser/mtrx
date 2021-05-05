import React from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import EditorScreen from '../components/Screens/Editor-screen';
import {setEditorTab} from '../store/actions';
import {EditorTab} from '../config';

const {
  PRESETS,
  MTRX,
  FILTERS
} = EditorTab;
const tabs = [PRESETS, MTRX, FILTERS];

const EditorScreenContainer = (props) => {
  const {
    activeTab = MTRX,
    onTabChange
  } = props;

  return (
    <EditorScreen
      activeTab={activeTab}
      tabs={tabs}
      onTabChange={onTabChange}/>
  );
};

EditorScreenContainer.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {editorTab} = state.editor;
  return {
    activeTab: editorTab
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onTabChange: setEditorTab,
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(EditorScreenContainer);
