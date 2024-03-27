import { useState } from "react";
import { BASE_POSTER_URL } from "../utils/constants";

const PopularMoviesList = (prop) => {
  const { moviesList } = prop;
  const { poster_path, title, vote_average, overview } =
    moviesList;
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = (e) => {
    e.preventDefault();
    setShowOverview(!showOverview);
  };

  return (
    <div className="m-5 w-60 h-[95%] cursor-pointer rounded-lg relative overflow-hidden hover:scale-105 duration-300 bg-[#E50914]">
      <img src={BASE_POSTER_URL + poster_path} alt={title} />
      <button
        onClick={toggleOverview}
        className="absolute top-0 right-0 px-2 py-1 bg-black text-white text-xs font-semibold rounded-md hover:text-[#E50914]"
      >
        {showOverview ? "Hide Overview" : "Overview"}
      </button>
      {showOverview && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-2">
          <h1 className="text-white text-xl font-bold">{title}</h1>
          <p className="text-sm">{overview}</p>
        </div>
      )}
      <h1 className="mx-4 my-2 p-1 text-white text-xl font-bold">{title}</h1>
      <div className="mx-4 my-2 flex items-center w-fit bg-black rounded-md">
        <i className="fa-solid fa-star text-yellow-500 mx-1"></i>
        <h2
          className={`font-semibold ${
            vote_average >= 7
              ? "text-green-500"
              : vote_average >= 6
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          {vote_average === 0 ? (
            <span className="text-white">NR</span>
          ) : (
            Math.round(vote_average * 10) / 10
          )}
        </h2>
        <h3 className="text-gray-400 text-xs mr-1">/10</h3>
      </div>
    </div>
  );
};
export default PopularMoviesList;
