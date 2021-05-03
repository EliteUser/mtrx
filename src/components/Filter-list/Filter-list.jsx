import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import style from './Filter-list.module.scss';

import Filter from '../Filter';
import {filterConfig, defaultFilterValues} from '../../config';

const FilterList = () => {
  const [filters, setFilters] = useState(defaultFilterValues);

  const onFilterChange = (filterType) => useCallback(
    (...[, value]) => setFilters((state) => ({
      ...state,
      [filterType]: value
    })),
    []
  );

  const onResetClick = (filterType) => useCallback(
    () => setFilters((state) => ({
      ...state,
      [filterType]: defaultFilterValues[filterType]
    })),
    []
  );

  return (
    <div className={style['filter-list']}>
      <ul className={style['filter-list__list']}>
        {
          Object.entries(filters).map(([filterName, value]) => {
            const {
              defaultValue,
              min,
              max,
              step,
              twoSided
            } = filterConfig[filterName];

            return (
              <li className={style['filter-list__item']} key={filterName}>
                <Filter
                  value={value}
                  filterName={filterName}
                  defaultValue={defaultValue}
                  min={min}
                  max={max}
                  step={step}
                  twoSided={twoSided}
                  onFilterChange={onFilterChange(filterName)}
                  onResetClick={onResetClick(filterName)}
                />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

FilterList.propTypes = {};

export default FilterList;
