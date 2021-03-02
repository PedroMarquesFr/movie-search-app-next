import Header from "../components/Header";
import Home from "../components/Home";
import Layout from "../components/Layout";
import MoviesContext from "../contextAPI/MoviesContext";

const IndexPage = () => (
  <MoviesContext>
    <Layout title="Home | Movie Search">
      <Header/>
      <Home/>
    </Layout>
  </MoviesContext>
);

export default IndexPage;


