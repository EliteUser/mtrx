import React from 'react';
import PropTypes from 'prop-types';
import style from './App.module.scss';

import Header from '../Header';
import Main from '../Main';

const App = () => {
  return (
    <div className={style['app']}>
      <Header/>
      <Main/>
    </div>
  );
};

App.propTypes = {};

export default App;
