import axios from "axios";
import { HOST } from "@/env";

export const POST_EMAIL = "POST_EMAIL";

export const postEmail = () => {
  return async function (dispatch) {
    const emailApi = await axios.post(`${HOST}/userEmail`);
    const email = emailApi.data;
    dispatch({ type: POST_EMAIL, payload: email });
  };
};
