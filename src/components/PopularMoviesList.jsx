import { Link } from "react-router-dom";
import PopularMovieCard from "./PopularMovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import usePopularMoviesApi from "../hooks/usePopularMoviesApi";
import { useState } from "react";
import bgImg from "../assets/bg1.jpg";

const PopularMoviesList = () => {
  const [page, setPage] = useState(1);
  const { popularMovies, loading, error, hasMore, fetchPopularMovies } =
    usePopularMoviesApi(page);

  const handleFetchData = () => {
    fetchPopularMovies(page + 1);
    setPage(page + 1);
  };

  if (loading && popularMovies.length === 0) {
    return <p className="text-white text-center">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div
      className="bg-[url('/assets/bg1.jpg')] bg-contain flex"
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
    >
      <InfiniteScroll
        dataLength={popularMovies.length}
        next={handleFetchData}
        hasMore={hasMore}
        loader={<h4 className="text-white text-center">Loading...</h4>}
        endMessage={
          <p className="text-white text-center">
            You have reached the bottom end!
          </p>
        }
      >
        <div className="flex flex-wrap justify-center mt-20">
          {popularMovies.map((movie) => (
            <Link key={movie.id} to={"/movies/movie/" + movie.id}>
              <PopularMovieCard moviesList={movie} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default PopularMoviesList;
