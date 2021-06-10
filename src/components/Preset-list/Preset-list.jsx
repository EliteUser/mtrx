import React from 'react';
import PropTypes from 'prop-types';
import style from './Preset-list.module.scss';

import Preset from '../Preset';

const PresetList = (props) => {
  const {
    selectedPreset,
    presets,
    onPresetSelect
  } = props;

  return (
    <div className={style['preset-list']}>
      <ul className={style['preset-list__list']}>
        {
          presets.map((el) => {
            const {
              id,
              presetName,
              presetDescription
            } = el;

            const isSelected = id === selectedPreset;

            return (
              <li className={style['preset-list__item']} key={id}>
                <Preset
                  presetName={presetName}
                  presetDescription={presetDescription}
                  isSelected={isSelected}
                  onPresetSelect={onPresetSelect(id)}
                />
              </li>
            );
          })
        }
        <li className={style['scroll--fix']}>
          <div/>
        </li>
      </ul>
    </div>
  );
};

PresetList.propTypes = {};

export default PresetList;
