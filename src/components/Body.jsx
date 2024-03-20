import PopularMoviesList from "./PopularMoviesList";
import usePopularMoviesApi from "../hooks/usePopularMoviesApi";

const Body = () => {
  const popularMovies = usePopularMoviesApi();
  return (
    <div className="bg-[url('/assets/bg1.jpg')] bg-contain flex">
      <div className="flex flex-wrap justify-center mt-20">
        {popularMovies.map((movie) => (
          <PopularMoviesList key={movie.id} moviesList={movie} />
        ))}
      </div>
    </div>
  );
};
export default Body;
