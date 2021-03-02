import React, { useContext } from "react";
import Context from "../../contextAPI/setup";
import Movie from "./MovieContainer";

// import { Container } from './styles';

const MoviesWrap: React.FC = () => {
  const {
    movieArray,
  } = useContext(Context);

  return (
    <div>
      {movieArray.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MoviesWrap;
