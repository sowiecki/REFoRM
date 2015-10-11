import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import api from '../middleware/api';

export default function configureStore(initialState) {
  let createStoreWithMiddleware = applyMiddleware(api)(createStore);
  let store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
