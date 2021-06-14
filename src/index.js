import React from 'react';
import ReactDOM from 'react-dom';

import {registerServiceWorker} from './registerServiceWorker';

import './scss/style.scss';
import App from './components/App';

import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector(`#root`)
);

registerServiceWorker();

// TODO TESTS. Yeah i know...
// TODO SVG sprite with use. Now all svg icons hardcoded into components and they are duplicating
// TODO service worker and manifest. Create pwa
// TODO Branch with offscreen canvas
// TODO Check PropTypes
