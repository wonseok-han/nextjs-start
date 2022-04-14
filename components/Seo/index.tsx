import Head from "next/head";

const Seo = ({ title }: any) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
