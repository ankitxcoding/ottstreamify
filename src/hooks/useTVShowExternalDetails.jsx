import { useEffect, useState } from "react";
import {
  OPTIONS,
  TVSHOWS_BASE_API,
  TVSHOWS_EXTERNAL_DETAILS,
} from "../utils/constants";

const useTVShowExternalDetails = (tvShowId) => {
  const [tvShowExternalDetails, setTVShowExternalDetails] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      TVSHOWS_BASE_API + tvShowId + TVSHOWS_EXTERNAL_DETAILS,
      OPTIONS
    );
    const json = await data.json();
    setTVShowExternalDetails(json);
  };
  return tvShowExternalDetails;
};
export default useTVShowExternalDetails;
