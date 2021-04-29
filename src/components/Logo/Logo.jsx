import React from 'react';
import PropTypes from 'prop-types';
import style from './Logo.module.scss';

import {ReactComponent as LogoImg} from '../../../public/assets/logo-ti.svg';

const Logo = () => {
  return (
    <div className={style['logo']}>
      <LogoImg className={style['logo__svg']}/>
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
