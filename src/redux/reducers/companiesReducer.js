import * as actions from '../actions/types';

const initialState = [];

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${actions.GET_COMPANIES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default companiesReducer;
