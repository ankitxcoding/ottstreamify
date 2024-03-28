import { OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { MOVIES_BASE_API } from "../utils/constants";

const usePopularMoviesApi = (page) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchPopularMovies = async (pageNumber) => {
    try {
      const data = await fetch(
        `${MOVIES_BASE_API}popular?&page=${pageNumber}`,
        OPTIONS
      );
      if (!data.ok) {
        throw new Error("Failed to fetch");
      }
      const json = await data.json();
      if (json.results.length === 0) {
        setHasMore(false);
      } else {
        setPopularMovies([...popularMovies, ...json.results]);
      }
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch popular movies!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularMovies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { popularMovies, loading, error, hasMore, fetchPopularMovies };
};
export default usePopularMoviesApi;
