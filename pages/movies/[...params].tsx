import { useEffect } from "react";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ params: { params } }: any) => {
  return {
    props: { params },
  };
};

const Detail = ({ params }: any) => {
  const [title, id] = params || [];
  console.log(params);

  const fetchDetail = async () => {
    const data = await fetch(`/api/movies/${id}`);
    const jsonData = await data.json();
    console.log("data::", jsonData);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div>
      <h4>{title || "Loading..."}</h4>
    </div>
  );
};

export default Detail;
