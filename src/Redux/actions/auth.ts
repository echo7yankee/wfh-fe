import axios from "axios";

//TS TYPES
import { Credentials } from "../../TSTypes/Credentials";

export function loginUser(credentials) {
  return async function(_dispatch) {
    try {
      const response = await axios.post("/user/login", credentials);
      const { data } = response;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}
