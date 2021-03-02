import React, { useState, useContext } from "react";
import Context from "../../contextAPI/setup";

// import { Container } from './styles';
let timer: any = null;
const Header: React.FC = () => {
  const { handleFetchByQuery } = useContext(Context);

  const [movie, setMovie] = useState("");

  const stopTimer = () => {
    if (timer !== null) {
      console.log("cancelou");
      clearTimeout(timer);
    }
  };
  const handleDelay = (e: React.ChangeEvent<HTMLInputElement>) => {
    stopTimer();
    setMovie(e.target.value);
    timer = setTimeout(() => {
        handleFetchByQuery(movie);
    }, 500);
  };
  return (
    <header>
      <h2>MovieSearcher</h2>
      <input placeholder="Busque por um filme" onChange={handleDelay} />
    </header>
  );
};

export default Header;
