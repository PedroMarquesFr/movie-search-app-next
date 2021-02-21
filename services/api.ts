import axios from "axios";
import key from "./key";

export async function searchByQuery(movie: string) {
  return axios
    .get(`http://www.omdbapi.com/?s=${movie}&apikey=${key}`)
    .then((r) => {
      console.log(r);
      return r.data.Search;
    });
}

export async function searchRandom() {
  return axios
    .get(
      ``
    )
    .then((r) => {
      console.log(r.status);
      return r.request.response;
    });
}
