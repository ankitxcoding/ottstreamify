import { Link } from "react-router-dom";
import PopularTVShowCard from "./PopularTVShowCard";
import InfiniteScroll from "react-infinite-scroll-component";
import usePopularTVShowsApi from "../hooks/usePopularTVShowsApi";
import { useState } from "react";
import bgImg from "../assets/bg1.jpg";
import useTVShowSearch from "../hooks/useTVShowSearch";

const PopularTVShowsList = () => {
  const [page, setPage] = useState(1);
  const { popularTVShows, loading, error, hasMore, fetchPopularTVShows } =
    usePopularTVShowsApi(page);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    searchResults,
    loading: searchLoading,
    error: searchError,
    fetchNextPage,
    hasMore: hasMoreSearchResults,
    resetSearch,
  } = useTVShowSearch(searchQuery);

  const handleFetchData = () => {
    if (searchQuery.trim()) {
      fetchNextPage();
    } else {
      fetchPopularTVShows(page + 1);
      setPage(page + 1);
    }
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      resetSearch();
    }
  };

  if (loading && popularTVShows.length === 0) {
    return <p className="text-white text-center">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div
      className="bg-contain flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
        backgroundSize: "auto",
      }}
    >
      <div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2"
        style={{ maxWidth: "50%" }}
      >
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search Any tvShows Here..."
            className="m-1 px-4 py-1 text-white bg-black border-2 border-white rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="m-1 px-4 py-1 text-white bg-black hover:bg-zinc-800 border-2 border-white rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {searchLoading && <p>Loading search results...</p>}
      {searchError && <p>{searchError}</p>}
      <InfiniteScroll
        dataLength={
          searchQuery.trim() ? searchResults.length : popularTVShows.length
        }
        next={handleFetchData}
        hasMore={searchQuery.trim() ? hasMoreSearchResults : hasMore}
        loader={<h4 className="text-white text-center">Loading...</h4>}
        endMessage={
          <p className="text-white text-center">
            You have reached the bottom end!
          </p>
        }
      >
        <div className="flex flex-wrap justify-center mt-20">
          {searchResults.map((tvShow) => (
            <Link key={tvShow.id} to={`/tvShows/tvShow/${tvShow.id}`}>
              <PopularTVShowCard tvShowList={tvShow} />
            </Link>
          ))}
          {!searchQuery.trim() &&
            popularTVShows.map((tvShow) => (
              <Link key={tvShow.id} to={`/tvShows/tvShow/${tvShow.id}`}>
                <PopularTVShowCard tvShowList={tvShow} />
              </Link>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default PopularTVShowsList;
