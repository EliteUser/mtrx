import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import FilterList from '../components/Filter-list';
import {setFilter, resetFilter} from '../store/actions';

import throttle from 'lodash.throttle';

const FilterListContainer = (props) => {
  const {
    filters,
    onFilterChange,
    onFilterReset,
  } = props;

  const throttled = throttle(onFilterChange, 100);
  const onChange = (filterName) => useCallback(
    (...[, value]) => requestAnimationFrame(() => {
      return throttled(value, filterName);
    }),
    []
  );

  const onReset = (filterName) => useCallback(
    () => onFilterReset(filterName),
    []
  );

  return (
    <FilterList
      filters={filters}
      onFilterChange={onChange}
      onFilterReset={onReset}
    />
  );
};

FilterListContainer.propTypes = {
  filters: PropTypes.object,
  onFilterChange: PropTypes.func,
  onFilterReset: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    filters: state.filter.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onFilterChange: setFilter,
    onFilterReset: resetFilter
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FilterListContainer);
