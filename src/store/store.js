import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// Reducers
import { rootReducer } from 'reducers/root.reducer';

const middlewares = [ReduxThunk];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer(), enhancer);

export { store };
