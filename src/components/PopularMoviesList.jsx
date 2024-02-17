import usePopularMoviesApi from "../hooks/usePopularMoviesApi";
import { BASE_URL } from "../utils/constants";

const PopularMoviesList = () => {
  const popularMovies = usePopularMoviesApi();

  return (
    <div className="absolute text-white flex flex-wrap">
      {popularMovies.map((movie) => (
        <ul key={movie.id} className="w-52 m-4">
          <li>
            <img src={BASE_URL + movie.poster_path} />
          </li>
          <li>
            <h1>{movie.title}</h1>
          </li>
          <li>
            <h2>{movie.vote_average}</h2>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default PopularMoviesList;
