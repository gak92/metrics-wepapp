import * as actions from '../actions/types';

const initialState = [];

const companyDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${actions.GET_COMPANY_DETAIL}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default companyDetailsReducer;
