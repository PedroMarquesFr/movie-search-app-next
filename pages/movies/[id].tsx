import React from "react";
// import { GetStaticProps, GetStaticPaths } from "next";
import { Movie } from "../../interfaces";

// import { Container } from './styles';

const Details: React.FC<{ movie: Movie }> = ({ movie }) => {
  return <div>ola</div>;
};

export default Details;

// export const getStaticPaths: GetStaticPaths = async () => {
//     // Get the paths we want to pre-render based on users
//     const paths = sampleUserData.map((user) => ({
//       params: { id: user.id.toString() },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }