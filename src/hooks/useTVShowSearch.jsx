import { useState, useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useTVShowSearch = (query) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) {
        setSearchResults([]);
        setHasMore(true);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(
            trimmedQuery
          )}&include_adult=false&language=en-US&page=${page}`,
          OPTIONS
        );

        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }

        const data = await response.json();
        setSearchResults((prevResults) =>
          page === 1 ? data.results : [...prevResults, ...data.results]
        );
        setHasMore(data.results.length > 0);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, page]);

  const fetchNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const resetSearch = () => {
    setPage(1);
    setSearchResults([]);
    setHasMore(true);
  };

  return { searchResults, loading, error, hasMore, fetchNextPage, resetSearch };
};

export default useTVShowSearch;
