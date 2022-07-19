import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";

import '../styles/globals.css'
import "../styles/Layout/NaviBar.css";
import "../styles/Layout/Footer.css";
import "../styles/Home/Services.css"
import "../styles/Home/Title.css"
import "../styles/Home/Process.css"
import "../styles/Home/Contact.css"
import "../styles/ContactForm.css"

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
