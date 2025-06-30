import { useEffect, useState } from "react";
import { OPTIONS, TVSHOWS_BASE_API } from "../utils/constants";

const useTVShowsCredits = (tvShowId) => {
  const [tvShowCredit, setTVShowCredit] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(TVSHOWS_BASE_API + tvShowId + "/credits", OPTIONS);
    const json = await data.json();
    setTVShowCredit(json.cast);
  };
  return tvShowCredit;
};

export default useTVShowsCredits;
