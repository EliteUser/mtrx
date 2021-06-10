import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';

import {logMiddleware} from './middlewares/log';
import {idMiddleware} from './middlewares/id';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logMiddleware,
      idMiddleware
    )
  )
);

export default store;
