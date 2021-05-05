import {combineReducers} from 'redux';

import screen from './screen';
import editor from './editor';
import image from './image';

export default combineReducers({
  screen,
  editor,
  image
});
