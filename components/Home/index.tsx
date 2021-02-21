import { useContext, useEffect } from "react";
import Context from "../../contextAPI/setup";
import React from "react";
import Layout from "../Layout";

// import { Container } from './styles';

const Home: React.FC = () => {
  const {
    movieArray,
    handleFetchByQuery,
  } = useContext(Context);
  useEffect(() => {
    handleFetchByQuery('spider');
  }, [])
  return (
      <div>{movieArray.map(({Title})=><p>{Title}</p>)}</div>
  );
};

export default Home;
