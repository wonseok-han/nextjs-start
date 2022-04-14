import { API_KEY, IMAGE_API_HOST } from "../Constants";
import { useEffect, useState } from "react";

import Image from "next/image";
import Seo from "../components/Seo";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchPopular = async () => {
    const data = await fetch("/api/movies");

    if (data) {
      const { results } = await data.json();

      setMovies(results);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {movies.length === 0 && <h4>Loading...</h4>}
      {movies?.map((movie: any) => (
        <div className="movie" key={movie?.id}>
          <img src={`/api/movies/posters/${movie.poster_path}`} />
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
