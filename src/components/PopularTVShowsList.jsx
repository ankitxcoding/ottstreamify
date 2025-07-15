import { Link } from "react-router-dom";
import PopularTVShowCard from "./PopularTVShowCard";
import InfiniteScroll from "react-infinite-scroll-component";
import usePopularTVShowsApi from "../hooks/usePopularTVShowsApi";
import { useState } from "react";
import bgImg from "../assets/bg2.jpg";
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
  } = useTVShowSearch(searchQuery, 800);

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
    return (
      <div
        className="relative flex justify-center items-center min-h-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="flex flex-col justify-center items-center">
            <div
              className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <p className="text-white m-4 text-xl sm:text-3xl text-center">
              Loading tv shows, please wait...
            </p>
            <p className="text-white m-2 text-lg sm:text-xl text-center">
              If loading takes too long, try refreshing the page or using a VPN.
            </p>
            <p className="text-white m-2 text-lg sm:text-xl text-center">
              <span className="font-semibold">Note:</span> Jio users in India
              may need a VPN to access movies.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-contain flex justify-center items-center min-h-screen pt-16 sm:pt-16 relative"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "auto" }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-70 px-4 sm:px-8">
          <p className="m-2 text-white text-3xl sm:text-4xl text-center">
            {error}
          </p>
          <p className="m-2 text-white text-xl sm:text-3xl text-center">
            There may be a network issue. Please try refreshing the page.
          </p>
          <p className="text-white text-lg sm:text-2xl text-center">OR</p>
          <p className="m-2 text-white text-lg sm:text-2xl text-center">
            <span className="font-semibold">Note:</span> Jio users in India may
            need a VPN to access contents.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-contain flex justify-center items-center min-h-screen pt-16 sm:pt-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "auto",
      }}
    >
      <div
        className="absolute top-36 sm:top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-1/2"
        style={{
          maxWidth: "90%",
          "@media (min-width: 640px)": { maxWidth: "50%" },
        }}
      >
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
          <input
            type="text"
            placeholder="Search Any TV Shows Here..."
            className="px-3 sm:px-4 py-2 text-white bg-black border-2 border-white rounded-md w-full text-sm sm:text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="px-3 sm:px-4 py-2 text-white bg-black hover:bg-zinc-800 border-2 border-white rounded-md text-sm sm:text-base"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {searchLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <p className="text-white text-center">Loading search results...</p>
        </div>
      )}
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
        <div className="w-full max-w-[1400px] mx-auto mt-40 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {searchResults.map((tvShow) => (
              <Link
                key={tvShow.id}
                to={`/tvShows/tvShow/${tvShow.id}`}
                className="w-full aspect-[2/3]"
              >
                <PopularTVShowCard tvShowList={tvShow} />
              </Link>
            ))}
            {!searchQuery.trim() &&
              popularTVShows.map((tvShow) => (
                <Link
                  key={tvShow.id}
                  to={`/tvShows/tvShow/${tvShow.id}`}
                  className="w-full aspect-[2/3]"
                >
                  <PopularTVShowCard tvShowList={tvShow} />
                </Link>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PopularTVShowsList;
