import "../styles/globals.css";

import NavBar2 from "../components/NavBar2";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <NavBar2 />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default App;
