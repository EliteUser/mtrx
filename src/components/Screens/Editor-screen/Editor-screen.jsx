import React from 'react';
import PropTypes from 'prop-types';
import style from './Editor-screen.module.scss';

import {EditorTab} from '../../../config';

import StyledTabs from './Styled-tabs';
import StyledTab from './Styled-tab';
import EditorTabpanel from '../../Editor-tabpanel';

import {ReactComponent as TextLogo} from '../../../../public/assets/logo-t.svg';
import ImageWorkareaContainer from '../../../containers/Image-workarea-container';

import PresetListContainer from '../../../containers/Preset-list-container';
import ControlsWorkareaContainer from '../../../containers/Controls-workarea-container';
import FilterListContainer from '../../../containers/Filter-list-container';

const getControls = (tabName) => {
  let componentToRender = null;
  switch (tabName) {
    case EditorTab.PRESETS: {
      componentToRender = <PresetListContainer/>;
      break;
    }
    case EditorTab.MTRX: {
      componentToRender = <ControlsWorkareaContainer/>;
      break;
    }
    case EditorTab.FILTERS: {
      componentToRender = <FilterListContainer/>;
      break;
    }
  }

  return componentToRender;
};

const EditorScreen = (props) => {
  const {
    activeTab,
    tabs,
    onTabChange
  } = props;

  const onTabClick = (evt, tabName) => {
    onTabChange(tabName);
  };

  return (
    <div className={style['editor']}>
      <ImageWorkareaContainer/>
      {
        tabs.map((tabName) => {
          return (
            <EditorTabpanel key={tabName} value={activeTab} index={tabName} label={tabName}>
              {getControls(tabName)}
            </EditorTabpanel>
          );
        })
      }
      <StyledTabs
        className={style['editor-tabs']}
        value={activeTab}
        onChange={onTabClick}
        variant="fullWidth"
        aria-label="Application tabs">
        {
          tabs.map((tabName) => {
            const name = tabName === 'mtrx' ? <TextLogo/> : tabName;
            return (
              <StyledTab
                className={style['editor-tab']}
                key={tabName}
                label={name}
                value={tabName}
                aria-controls={`tabpanel-${tabName}`}
                id={`tab-${tabName}`}
              />
            );
          })
        }
      </StyledTabs>
    </div>
  );
};

EditorScreen.propTypes = {
  activeTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  onTabChange: PropTypes.func
};

export default EditorScreen;
