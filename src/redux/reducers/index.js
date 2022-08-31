import { combineReducers } from '@reduxjs/toolkit';
import companiesReducer from './companiesReducer';

const rootReducer = combineReducers({
  companiesReducer,
});

export default rootReducer;
