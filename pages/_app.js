import "../styles/global.scss";
import Head from "next/head";
// import "antd/dist/antd.css";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
        <NextNProgress
          color="#005bab"
          startPosition={0.3}
          stopDelayMs={200}
          height="4"
        />
        <Component {...pageProps} />
      </AnimatePresence>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default MyApp;
