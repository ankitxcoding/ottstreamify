import { Link } from "react-router-dom";
import PopularTVShowCard from "./PopularTVShowCard";
import InfiniteScroll from "react-infinite-scroll-component";
import usePopularTVShowsApi from "../hooks/usePopularTVShowsApi";
import { useState } from "react";
import bgImg from "../assets/bg1.jpg";

const PopularTVShowsList = () => {
  const [page, setPage] = useState(1);
  const { popularTVShows, loading, error, hasMore, fetchPopularTVShows } =
    usePopularTVShowsApi(page);

  const handleFetchData = () => {
    fetchPopularTVShows(page + 1);
    setPage(page + 1);
  };

  if (loading && popularTVShows.length === 0) {
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
        dataLength={popularTVShows.length}
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
          {popularTVShows.map((tvShow) => (
            <Link key={tvShow.id} to={"/tvShows/tvShow/" + tvShow.id}>
              <PopularTVShowCard tvShowList={tvShow} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default PopularTVShowsList;
