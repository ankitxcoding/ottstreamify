import PopularMoviesList from "./PopularMoviesList";
import usePopularMoviesApi from "../hooks/usePopularMoviesApi";

const Body = () => {
  const popularMovies=usePopularMoviesApi();
  return (
    <div>
      <div>{popularMovies.map(movie=><PopularMoviesList key={movie.id} moviesList={movie} />)}</div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url("/assets/bg1.jpg")' }}
      ></div>
    </div>
  );
};
export default Body;
