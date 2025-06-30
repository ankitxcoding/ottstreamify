import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";
import { MOVIES_BASE_API } from "../utils/constants";

const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MOVIES_BASE_API + movieId + "?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    setMovieDetails(json);
  };
  return movieDetails;
};

export default useMovieDetails;
