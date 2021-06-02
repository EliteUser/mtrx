import React from 'react';
import PropTypes from 'prop-types';
import style from './Entry-screen.module.scss';

import {SCREEN_DT} from '../../../config';
import {useMediaQuery} from 'react-responsive';

import BigLogo from '../../Big-logo';
import GithubLink from '../../Github-link';
import FileChooserContainer from '../../../containers/File-chooser-container';

const EntryScreen = () => {
  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${SCREEN_DT + 1}px)`
  });

  return (
    <div className={style['entry']}>
      <BigLogo className={style['entry__logo']}/>
      <p className={style['entry__text']}>
        {!isDesktop ? 'Add photo to start' : 'Choose photo or drop file here to start'}
      </p>
      {isDesktop ? <FileChooserContainer isDrop={true}/> : null}
      <div className={style['entry__wrapper']}>
        <GithubLink/>
        {!isDesktop ? <FileChooserContainer/> : null}
      </div>
    </div>
  );
};

export default EntryScreen;
