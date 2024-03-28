import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";
import { MOVIES_BASE_API } from "../utils/constants";

const useMovieBackdropImg = (movieId) => {
  const [backdropImage, setBackdropImage] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(MOVIES_BASE_API + movieId + "/images", OPTIONS);
    const json = await data.json();
    setBackdropImage(json);
  };
  return backdropImage;
};
export default useMovieBackdropImg;
