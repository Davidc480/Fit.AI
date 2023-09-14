"use client";

import { legacy_createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export { store, Provider as ReduxProvider };
