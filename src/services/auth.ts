import axios from "axios";

export function authenUser() {
  return axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1");
}
