import * as actions from '../actions/types';

const initialState = [];

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${actions.GET_COMPANIES}/fulfilled`:
      // console.log('Action:', action);
      return action.payload;
    default:
      return state;
  }
};

export default companiesReducer;
