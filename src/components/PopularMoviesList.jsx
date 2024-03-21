import { BASE_URL } from "../utils/constants";

const PopularMoviesList = (prop) => {
  const { moviesList } = prop;
  const { poster_path, title, vote_average } = moviesList;
  console.log(moviesList);

  return (
    <div className="m-5 w-72 cursor-pointer rounded-lg overflow-hidden hover:scale-105 duration-300 bg-[#E50914]">
      <img src={BASE_URL + poster_path} />
      <h1 className="mx-4 my-2 p-1 text-white text-xl font-bold">{title}</h1>
      <h2 className="mx-4 my-2 p-1 text-white font-semibold">
        {Math.round(vote_average * 10) / 10}
      </h2>
    </div>
  );
};

export default PopularMoviesList;
