import { useEffect, useState } from "react";
import { OPTIONS, TVSHOWS_BASE_API } from "../utils/constants";

const useTVShowDetails = (tvShowId) => {
  const [tvShowDetails, setTVShowDetails] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      TVSHOWS_BASE_API + tvShowId + "?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    setTVShowDetails(json);
  };
  return tvShowDetails;
};

export default useTVShowDetails;
