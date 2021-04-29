import React from 'react';
import PropTypes from 'prop-types';
import style from './Github-link.module.scss';

import Link from '../Link';
import {ReactComponent as GithubIcon} from '../../../public/assets/icon-github.svg';

const GithubLink = (props) => {
  return (
    <Link href={'https://github.com/EliteUser'} className={style['link--github']}>
      <GithubIcon/>
    </Link>
  );
};

GithubLink.propTypes = {};

export default GithubLink;
