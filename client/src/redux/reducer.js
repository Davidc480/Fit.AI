import { POST_EMAIL } from "./actions";
import { ERROR } from "./actions";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EMAIL:
      return { ...state, email: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
