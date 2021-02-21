import React, { useState } from "react";
import Context from "./setup";
import { searchByQuery } from "../services/api";
import { Movie } from "../interfaces";

const MoviesContext: React.FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [movieArray, setMovieArray] = useState<Movie[]>([]);
  const [doesDataExists, setdoesDataExists] = useState<boolean>(false);

  const handleFetchByQuery = async (term: string) => {
    setIsFetching(true);
    const resp:Movie[] = await searchByQuery(term);
    setMovieArray(resp);
    setIsFetching(false);
    setdoesDataExists(true);
  };

  const contextData = {
    handleFetchByQuery,
    movieArray,
    isFetching,
    doesDataExists,
  };
  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

export default MoviesContext;
