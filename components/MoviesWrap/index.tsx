import React, { useContext, useEffect } from "react";
import Context from "../../contextAPI/setup";
import Movie from "./MovieContainer";

// import { Container } from './styles';

const MoviesWrap: React.FC = () => {
  const {
    doesDataExists,
    handleFetchByQuery,
    isFetching,
    movieArray,
  } = useContext(Context);
  useEffect(() => {
    handleFetchByQuery("spider");
  }, []);
  if (isFetching) {
    return <span>Loading...</span>;
  }
  if (!doesDataExists) {
    return <span>Search a movie</span>;
  }
  return (
    <div>
      {movieArray.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};

export default MoviesWrap;
