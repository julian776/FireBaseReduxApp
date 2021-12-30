import { createStore, combineReducers,applyMiddleware, compose } from "redux";

import * as reducers from '../reducers'

import thunk from "redux-thunk";

const rootReducer = combineReducers(reducers)

const composeEnhacer =  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = createStore(
  rootReducer,
  composeEnhacer(applyMiddleware(thunk))
);