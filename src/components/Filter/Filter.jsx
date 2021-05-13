import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.scss';

import FilterSlider from './FilterSlider';
import Button from '../Button';
import {ReactComponent as ResetIcon} from '../../../public/assets/icon-reset.svg';

import {toPercentageScale} from '../../utils/utils';

const Filter = (props) => {
  const {
    filterName,
    defaultValue,
    value,
    min,
    max,
    step,
    twoSided,
    onFilterChange,
    onFilterReset
  } = props;

  const isEdited = value !== defaultValue;

  let filterTextStyle = [style['filter__text']];
  if (isEdited) {
    filterTextStyle.push(style['filter__text--edited']);
  }
  filterTextStyle = filterTextStyle.join(' ');

  return (
    <div className={style['filter']}>
      <div className={filterTextStyle}>
        <span>{filterName}</span>
        <span>{toPercentageScale(min, max, twoSided, value)}</span>
      </div>

      <FilterSlider
        track={false}
        className={style['filter__slider']}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onFilterChange}
      />

      {isEdited
        ? <Button
          className={style['filter__btn']}
          isTextHidden={true}
          text={`Reset ${filterName} filter`}
          onBtnClick={onFilterReset}
        >
          <ResetIcon/>
        </Button>
        : null
      }
    </div>
  );
};

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  defaultValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  twoSided: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onFilterReset: PropTypes.func.isRequired,
};

export default React.memo(Filter);
