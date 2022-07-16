import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import "../styles/Layout/NaviBar.css";
import "../styles/Home/Services.css"

import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/Layout/Layout";


function MyApp({ Component, pageProps }) {
  return(
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp
