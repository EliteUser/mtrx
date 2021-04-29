import React from 'react';
import PropTypes from 'prop-types';
import style from './Big-logo.module.scss';

import {ReactComponent as LogoImg} from '../../../public/assets/logo-big.svg';

const BigLogo = (props) => {
  return (
    <div className={`${style['big-logo']} ${props.className}`}>
      <LogoImg className={style['big-logo__svg']}/>
    </div>
  );
};

BigLogo.propTypes = {
  className: PropTypes.string
};

export default BigLogo;
