import * as Redux from 'redux';
import thunk from 'redux-thunk';

import {  stockCodesReducer
          } from '../reducers/reducers.jsx';

export var configure = (initialState = {}) => {

  var reducer = Redux.combineReducers({
    stockCodes: stockCodesReducer
  });

  var store = Redux.createStore(
    reducer,
    initialState,
    Redux.compose(
      Redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}
