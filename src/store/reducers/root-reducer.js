import {combineReducers} from 'redux';

import screen from './screen';
import editor from './editor';
import image from './image';
import filter from './filter';

export default combineReducers({
  screen,
  editor,
  image,
  filter
});
