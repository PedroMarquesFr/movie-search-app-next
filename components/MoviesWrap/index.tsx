import React, { useContext } from "react";
import Context from "../../contextAPI/setup";
import Movie from "./MovieContainer";

import { Container } from './styles';

const MoviesWrap: React.FC = () => {
  const {
    movieArray,
  } = useContext(Context);

  return (
    <Container>
      {movieArray.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </Container>
  );
};

export default MoviesWrap;
