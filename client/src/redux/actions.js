import axios from "axios";
import { HOST } from "@/env";

export const POST_EMAIL = "POST_EMAIL";
export const ERROR = "ERROR";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const postEmail = (email) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${HOST}/userEmail`, {
        email: email,
      });
      const { user } = response.data;
      dispatch({ type: POST_EMAIL, payload: user });
    } catch (err) {
      dispatch({ type: ERROR, payload: err });
    }
  };
};

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
