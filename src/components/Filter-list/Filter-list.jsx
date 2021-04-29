import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import style from './Filter-list.scss';

import Filter from '../Filter';

const FilterList = () => {
  const [filters, setFilters] = useState({
    'contrast': 0,
    'opacity': 0,
    'brightness': 0,
  });

  const onFilterInput = useCallback(
    ({target}) => setFilters((state) => ({
      ...state,
      [target.name]: target.value
    })),
    []
  );

  return (
    <div className={style['filter-list']}>
      <ul className={style['filter-list__list']}>
        {
          Object.entries(filters).map(([filterName, value]) => {
            return <Filter
              key={filterName}
              value={value}
              filterType={filterName}
              onFilterInput={onFilterInput}/>;
          })
        }
      </ul>
    </div>
  );
};

FilterList.propTypes = {};

export default FilterList;
