import { BASE_URL } from "../utils/constants";

const PopularMoviesList = (prop) => {
  const { moviesList } = prop;
  const { poster_path, title, vote_average } = moviesList;
  console.log(moviesList);

  return (
    <div className="m-5 w-72 cursor-pointer rounded-lg overflow-hidden hover:scale-105 duration-300 bg-[#E50914]">
      <img src={BASE_URL + poster_path} />
      <h1 className="text-white p-2">{title}</h1>
      <h2 className="text-white p-2">{vote_average}</h2>
    </div>
  );
};

export default PopularMoviesList;
