import React from 'react';
import PropTypes from 'prop-types';
import style from './App.module.scss';

import {connect} from 'react-redux';

import Header from '../Header';
import {AppScreen} from '../../config';
import EntryScreen from '../Screens/Entry-screen';
import EditorScreen from '../Screens/Editor-screen/Editor-screen';

const App = (props) => {
  const {screen = 'entry'} = props;

  let currentScreen = null;
  switch (screen) {
    case AppScreen.ENTRY: {
      currentScreen = <EntryScreen/>;
      break;
    }
    case AppScreen.EDITOR: {
      currentScreen = <EditorScreen/>;
      break;
    }
    default: {
      currentScreen = <EntryScreen/>;
      break;
    }
  }

  return (
    <div className={style['app']}>
      <Header/>
      {currentScreen}
    </div>
  );
};

App.propTypes = {
  screen: PropTypes.string
};

const mapStateToProps = (state) => {
  const {screen: {appScreen}} = state;
  return {
    screen: appScreen
  };
};

export default connect(mapStateToProps)(App);
