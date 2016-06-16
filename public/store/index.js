/* eslint padded-blocks: 0 */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);


function configureStore(initialState) {

  const finallreducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  const store = createStoreWithMiddleware(finallreducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export {configureStore, syncHistoryWithStore};
