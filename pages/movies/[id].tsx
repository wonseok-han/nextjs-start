import { API_HOST, API_KEY } from "../../Constants";

import { useEffect } from "react";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();

  const fetchDetail = async () => {
    const {
      query: { id },
    } = router;

    if (id) {
      const data = await fetch(`/api/movies/${id}`);
      const jsonData = await data.json();
      console.log("data::", jsonData);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
};

export default Detail;
