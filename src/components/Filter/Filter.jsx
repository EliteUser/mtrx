import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import style from './Filter.scss';

const Filter = (props) => {
  useEffect(() => {
    console.log('RENDER', props);
  });

  return (
    <div className={style['filter']}>
      <label className={style['filter__label']} htmlFor={props.filterType}>{props.filterType}</label>
      <input className={style['filter__input']} name={props.filterType} type="text" onInput={props.onFilterInput} value={props.value} id={props.filterType}/>
    </div>
  );
};

Filter.propTypes = {
  filterType: PropTypes.string.isRequired,
  onFilterInput: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default React.memo(Filter);

/*class Filter extends React.Component {
  constructor(props) {
    super();

    this.props = props;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return nextProps.value !== this.props.value;
  }


  componentDidMount() {
    console.log('Filter mount');
  }

  render() {
    console.log('Filter Render');
    return <div className={style['filter']}>
      <label className={style['filter__label']} htmlFor={this.props.filterType}>{this.props.filterType}</label>
      <input className={style['filter__input']} name={this.props.filterType} type="text"
             onInput={this.props.onFilterInput} value={this.props.value} id={this.props.filterType}/>
    </div>;
  }
}

Filter.propTypes = {
  filterType: PropTypes.string.isRequired,
  onFilterInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;*/
