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
  console.log(isFetching)
  if (isFetching) {
    return <span>Loading...</span>;
  }
  if (!doesDataExists) {
    return <span>Search a movie or there is no movie for this term</span>;
  }
  return (
    <div>
      {movieArray.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MoviesWrap;
