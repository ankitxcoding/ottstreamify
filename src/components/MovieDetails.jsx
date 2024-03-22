import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movieDetails = useMovieDetails(movieId);
  const { title } = movieDetails;

  return (
    <div>
      <h1 className="text-white text-9xl mt-40">{title}</h1>
    </div>
  );
};
export default MovieDetails;
