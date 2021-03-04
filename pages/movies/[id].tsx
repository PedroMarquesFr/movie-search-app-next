import React from "react";
import { GetServerSideProps } from "next";
import { MovieDetails } from "../../interfaces";
import { filmDetails } from "../../services/api";

// import { Container } from './styles';

const Details: React.FC<{ movie: MovieDetails }> = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <span>{movie.Title}</span>
      <span>{movie.Rated}</span>
      <span>{movie.Year}</span>
      <img src={movie.Poster}></img>
    </div>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const { id } = context.query;
  const obj = await filmDetails(id);
  console.log(obj);
  console.log(id);
  return {
    props: { movie: obj },
  };
};
