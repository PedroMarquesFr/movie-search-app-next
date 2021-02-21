import Link from "next/link";
import Home from "../components/Home";
import Layout from "../components/Layout";
import MoviesContext from "../contextAPI/MoviesContext";

const IndexPage = () => (
  <MoviesContext>
    <Layout title="Home | Movie Search">
      <Home/>
    </Layout>
  </MoviesContext>
);

export default IndexPage;
