import Slider from '@material-ui/core/Slider';
import {withStyles} from '@material-ui/core/styles';

const FilterSlider = withStyles({
  root: {
    color: 'var(--secondary-color)',
    height: 4,
    padding: '8px 0'
  },
  active: {},
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: 'var(--accent)',
    boxShadow: '0 4px 4px 0 var(--shadow-color)',
    '&:focus, &:hover': {
      boxShadow: '0 0 0 8px var(--slider-focus-color)',
    },
    '&$active': {
      boxShadow: '0 0 0 12px var(--slider-focus-color)',
    }
  },
  rail: {
    height: 4,
    borderRadius: 2,
    opacity: 1
  },
})(Slider);

export default FilterSlider;
