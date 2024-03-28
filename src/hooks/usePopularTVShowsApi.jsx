import { OPTIONS, TVSHOWS_BASE_API } from "../utils/constants";
import { useEffect, useState } from "react";

const usePopularTVShowsApi = (page) => {
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchPopularTVShows = async (pageNumber) => {
    try {
      const data = await fetch(
        `${TVSHOWS_BASE_API}popular?&page=${pageNumber}`,
        OPTIONS
      );
      if (!data.ok) {
        throw new Error("Failed to fetch");
      }
      const json = await data.json();
      if (json.results.length === 0) {
        setHasMore(false);
      } else {
        setPopularTVShows([...popularTVShows, ...json.results]);
      }
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch popular tv show!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularTVShows(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { popularTVShows, loading, error, hasMore, fetchPopularTVShows };
};
export default usePopularTVShowsApi;
