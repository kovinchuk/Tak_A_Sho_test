import { combineReducers } from 'redux';

// Reducers
import { generalReducer } from './general.reducer';

export const rootReducer = () =>
  combineReducers({
    general: generalReducer,
  });
