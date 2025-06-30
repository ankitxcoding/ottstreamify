import { useParams } from "react-router-dom";
import useMovieCredits from "../hooks/useMovieCredits";
import MovieCast from "./MovieCast";

const MovieCastList = () => {
  const { movieId } = useParams();
  const movieCredit = useMovieCredits(movieId);

  return (
    <div className="flex mx-2">
      {movieCredit.map((cast) => (
        <MovieCast key={cast.id} castList={cast} />
      ))}
    </div>
  );
};

export default MovieCastList;
