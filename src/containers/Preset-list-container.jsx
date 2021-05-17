import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import PresetList from '../components/Preset-list';
import {selectPreset} from '../store/actions';

const PresetListContainer = (props) => {
  const {
    selectedPreset,
    presets,
    onPresetSelect
  } = props;

  const onSelect = (id) => useCallback(
    () => onPresetSelect(id),
    []
  );

  return (
    <PresetList
      selectedPreset={selectedPreset}
      presets={presets}
      onPresetSelect={onSelect}
    />
  );
};

PresetListContainer.propTypes = {};

const mapStateToProps = (state) => {
  const {
    selectedPreset,
    presets
  } = state.filter;

  return {
    selectedPreset,
    presets
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onPresetSelect: selectPreset
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PresetListContainer);
