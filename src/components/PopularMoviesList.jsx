import { BASE_URL } from "../utils/constants";

const PopularMoviesList = (prop) => {
  const {moviesList}=prop;
  const{poster_path, title, vote_average}=moviesList;
  console.log(moviesList);

  return (
    <div>
      <img src={BASE_URL+poster_path}/>
      <h1>{title}</h1>
      <h2>{vote_average}</h2>
    </div>
  );
};

export default PopularMoviesList;
