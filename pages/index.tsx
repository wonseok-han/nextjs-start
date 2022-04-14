import { useEffect, useState } from "react";

import { HOST } from "../Constants";
import Image from "next/image";
import Seo from "../components/Seo";

const fetchPopular = async () => {
  const data = await fetch(`${HOST}api/movies`);
  const { results } = await data.json();

  return results;
};

export const getServerSideProps = async () => {
  const results = await fetchPopular();

  return {
    props: {
      results,
    },
  };
};

const Home = ({ results }: any) => {
  // const [movies, setMovies] = useState([]);

  // console.log(results);

  // const fetchPopular = async () => {
  //   const data = await fetch("/api/movies");

  //   if (data) {
  //     const { results } = await data.json();

  //     setMovies(results);
  //   }
  // };

  useEffect(() => {
    // fetchPopular();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {/* {movies.length === 0 && <h4>Loading...</h4>} */}
      {results?.map((movie: any) => (
        <div className="movie" key={movie?.id}>
          <img src={`/api/movies/posters${movie.poster_path}`} />
          <h4>{movie?.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
