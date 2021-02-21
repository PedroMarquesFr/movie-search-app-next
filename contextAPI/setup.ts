import { createContext } from "react";
import { Movie } from "../interfaces";

const Context = createContext<{
  movieArray: Movie[];
  doesDataExists: boolean;
  isFetching: boolean;
  handleFetchByQuery: (term: string) => Promise<void> | any;
}>({
  movieArray: [],
  doesDataExists: false,
  isFetching: false,
  handleFetchByQuery() {},
});

export default Context;
