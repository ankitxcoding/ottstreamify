import { useEffect, useState } from "react";
import { OPTIONS, TVSHOWS_BASE_API } from "../utils/constants";

const useTVShowBackdropImg = (tvShows) => {
  const [backdropImage, setBackdropImage] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(TVSHOWS_BASE_API + tvShows + "/images", OPTIONS);
    const json = await data.json();
    setBackdropImage(json);
  };
  return backdropImage;
};

export default useTVShowBackdropImg;
