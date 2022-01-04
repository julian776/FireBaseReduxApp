import reducer from './../reducers/index'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

const configureStore = () => {
    const middlewares = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(reducer(), enhancers);

    return store;
}

export default configureStore;