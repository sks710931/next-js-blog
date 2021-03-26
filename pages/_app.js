import React from 'react'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { loadCSS } from "fg-loadcss";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
