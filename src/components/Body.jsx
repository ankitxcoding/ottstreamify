import PopularMoviesList from "./PopularMoviesList";
import usePopularMoviesApi from "../hooks/usePopularMoviesApi";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [page, setPage] = useState(1);
  const { popularMovies, loading, error, hasMore, fetchPopularMovies } =
    usePopularMoviesApi(page);

  const handleFetchData = () => {
    fetchPopularMovies(page + 1);
    setPage(page + 1);
  };

  if (loading && popularMovies.length === 0) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-[url('/assets/bg1.jpg')] bg-contain flex">
      <InfiniteScroll
        dataLength={popularMovies.length}
        next={handleFetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className="text-white text-center">
            You have reached the bottom end!
          </p>
        }
      >
        <div className="flex flex-wrap justify-center mt-20">
          {popularMovies.map((movie) => (
            <Link key={movie.id} to={"movie/" + movie.id}>
              <PopularMoviesList moviesList={movie} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default Body;
