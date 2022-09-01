import { combineReducers } from '@reduxjs/toolkit';
import companiesReducer from './companiesReducer';
import companyDetailsReducer from './companyDetailsReducer';

const rootReducer = combineReducers({
  companiesReducer,
  companyDetailsReducer,
});

export default rootReducer;
