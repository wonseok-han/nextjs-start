import "../styles/globals.css";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <>
      <Seo
        title={
          pathname === "/"
            ? "Home"
            : pathname.substring(pathname.lastIndexOf("/") + 1)
        }
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        a {
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default App;
