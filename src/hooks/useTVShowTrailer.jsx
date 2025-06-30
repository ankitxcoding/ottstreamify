import { useEffect, useState } from "react";
import { OPTIONS, TVSHOWS_BASE_API } from "../utils/constants";

const useTVShowTrailer = (tvShowId) => {
  const [tvShowTrailer, setTVShowTrailer] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(TVSHOWS_BASE_API + tvShowId + "/videos", OPTIONS);
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailerKeys = trailers[0]?.key;
    setTVShowTrailer(trailerKeys || json?.results[0]?.key);
  };
  return tvShowTrailer;
};

export default useTVShowTrailer;
