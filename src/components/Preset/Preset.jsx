import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Preset.module.scss';

import Button from '../Button';
import {ReactComponent as ArrowIcon} from '../../../public/assets/icon-arrow.svg';
import {ReactComponent as LogoIcon} from '../../../public/assets/logo-i.svg';

const Preset = (props) => {
  const {
    presetName,
    presetDescription,
    isSelected,
    onPresetSelect
  } = props;

  const [isFront, setIsFront] = useState(true);
  const onBtnClick = () => {
    setIsFront(!isFront);
  };

  const wrapperStyle = `${style['preset__wrapper']} ${isFront ? style['preset__wrapper--front'] : style['preset__wrapper--back']}`;
  const toggleStyle = `${style['preset__toggle']} ${isFront ? '' : style['preset__toggle--active']}`.trim();
  const presetStyle = `${style['preset__selector']} ${isSelected ? style['preset__selector--selected'] : ''}`.trim();

  return (
    <div className={style['preset']}>
      <button
        className={presetStyle}
        type="button"
        onClick={onPresetSelect}
      >
        <div className={wrapperStyle}>
          <div className={style['preset__front']}>
            <p className={style['preset__name']}>{presetName}</p>
            <span className={style['preset__icon']}><LogoIcon/></span>
          </div>
          <div className={style['preset__back']}>
            <p className={style['preset__description']}>{presetDescription}</p>
          </div>
        </div>
      </button>

      <Button
        className={toggleStyle}
        text={'Toggle preset description'}
        isTextHidden={true}
        onBtnClick={onBtnClick}
      >
        <ArrowIcon/>
      </Button>

    </div>
  );
};

Preset.propTypes = {};

export default Preset;
