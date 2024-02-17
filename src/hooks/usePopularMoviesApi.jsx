import { OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const usePopularMoviesList = () => {
  const [popularList, setPopularList] = useState([]);
  const moviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      OPTIONS
    );
    const json = await data.json();
    setPopularList(json.results);
  };

  useEffect(() => {
    moviesList();
  }, []);

  return popularList;
};
export default usePopularMoviesList;
