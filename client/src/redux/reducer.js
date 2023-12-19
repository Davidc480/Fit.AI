import { POST_EMAIL } from "./actions";
import { ERROR } from "./actions";
import { SET_CURRENT_PAGE } from "./actions";

const initialState = {
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EMAIL:
      return { ...state, email: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
