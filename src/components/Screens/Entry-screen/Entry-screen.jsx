import React from 'react';
import PropTypes from 'prop-types';
import style from './Entry-screen.module.scss';

import BigLogo from '../../Big-logo';
import GithubLink from '../../Github-link';
import FileButtonContainer from '../../../containers/File-button-container';


const EntryScreen = () => {
  return (
    <div className={style['entry']}>
      <BigLogo className={style['entry__logo']}/>
      <p className={style['entry__text']}>Press + and add image to start</p>
      <div className={style['entry__wrapper']}>
        <GithubLink/>
        <FileButtonContainer/>
      </div>
    </div>
  );
};

export default EntryScreen;
