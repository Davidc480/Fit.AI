import {} from "./actions";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //     case GET_DOGS:
    //       return { ...state, dogs: action.payload, dogscopy: action.payload };
    //     case GET_DOG:
    //       return { ...state, dogs: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
