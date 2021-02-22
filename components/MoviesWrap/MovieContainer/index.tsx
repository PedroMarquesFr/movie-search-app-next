import Link from "next/link";
import React from "react";
import { Movie } from "../../../interfaces";

// import { Container } from './styles';

const MovieContainer: React.FC<{ movie: Movie }> = ({
  movie: { Poster, Title, Type, Year, imdbID },
}) => {
  return (
    <Link href="/movies/[id]" as={`/movies/${imdbID}`}>
      <div>
        <img src={Poster} alt="Poster" />
        <span>{Title}</span>
        <span>{Type}</span>
        <span>{Year}</span>
      </div>
    </Link>
  );
};

export default MovieContainer;
