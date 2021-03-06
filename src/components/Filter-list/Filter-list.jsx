import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter-list.module.scss';

import Filter from '../Filter';

const FilterList = (props) => {
  const {
    filters,
    onFilterChange,
    onFilterReset,
  } = props;

  return (
    <div className={style['filter-list']}>
      <ul className={style['filter-list__list']}>
        {
          Object.entries(filters).map(([filterName, filterProps]) => {
            const {
              defaultValue,
              value,
              min,
              max,
              step,
              twoSided
            } = filterProps;

            return (
              <li className={style['filter-list__item']} key={filterName}>
                <Filter
                  defaultValue={defaultValue}
                  value={value}
                  filterName={filterName}
                  min={min}
                  max={max}
                  step={step}
                  twoSided={twoSided}
                  onFilterChange={onFilterChange(filterName)}
                  onFilterReset={onFilterReset(filterName)}
                />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

FilterList.propTypes = {
  filters: PropTypes.object,
  onFilterChange: PropTypes.func,
  onFilterReset: PropTypes.func,
};

export default FilterList;
