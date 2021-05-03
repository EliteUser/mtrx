import React from 'react';
import PropTypes from 'prop-types';
import style from './Big-logo.module.scss';

import {ReactComponent as LogoIcon} from '../../../public/assets/logo-big.svg';

const BigLogo = (props) => {
  const {className = ''} = props;
  const styles = [style['big-logo'], className].join(' ').trim();

  return (
    <div className={styles}>
      <LogoIcon className={style['big-logo__svg']}/>
    </div>
  );
};

BigLogo.propTypes = {
  className: PropTypes.string
};

export default BigLogo;
