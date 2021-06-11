import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';

// eslint-disable-next-line no-undef
const isProduction = process.env.NODE_ENV === 'production';

import {logMiddleware} from './middlewares/log';
import {idMiddleware} from './middlewares/id';

const store = !isProduction ?
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logMiddleware,
        idMiddleware
      )
    )
  ) :
  createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      idMiddleware
    )
  );

export default store;
