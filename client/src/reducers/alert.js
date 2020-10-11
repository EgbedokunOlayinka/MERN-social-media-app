// {
//     id: 1,
//     msg: 'Please log in',
//     alertType: 'success'
// }

import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
