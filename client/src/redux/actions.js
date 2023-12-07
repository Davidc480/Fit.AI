import axios from "axios";
import { HOST } from "@/env";

export const POST_EMAIL = "POST_EMAIL";
export const ERROR = "ERROR";

export const postEmail = (email) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${HOST}/userEmail`, {
        email: email,
      });
      const { user } = response.data;
      console.log(user);
      dispatch({ type: POST_EMAIL, payload: user });
    } catch (err) {
      dispatch({ type: ERROR, payload: err });
    }
  };
};
