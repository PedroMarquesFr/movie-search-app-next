import React from "react";
import Header from "../components/Header";

// import { Container } from './styles';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Header />
    </Component>
  );
}

export default MyApp;
