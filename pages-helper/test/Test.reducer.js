import actionTypes from "./Test.types";
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  test: "Hello World"
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state };
    case actionTypes.TEST:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default reducer;