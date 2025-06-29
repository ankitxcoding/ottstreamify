import { useState } from "react";
import { BASE_POSTER_URL } from "../utils/constants";

const PopularTVShowCard = (prop) => {
  const { tvShowList } = prop;
  const { poster_path, name, vote_average, overview } = tvShowList;
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = (e) => {
    e.preventDefault();
    setShowOverview(!showOverview);
  };

  return (
    <div className="w-full h-[500px] cursor-pointer rounded-lg relative overflow-hidden hover:scale-105 duration-300 bg-[#E50914]">
      <div className="h-[400px] overflow-hidden">
        <img
          src={BASE_POSTER_URL + poster_path}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={toggleOverview}
        className="absolute top-0 right-0 px-2 py-1 bg-black text-white text-xs font-semibold rounded-md hover:text-[#E50914]"
      >
        {showOverview ? "Hide Overview" : "Overview"}
      </button>
      {showOverview && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-2">
          <h1 className="text-white text-xl font-bold truncate">{name}</h1>
          <p className="text-sm line-clamp-3">{overview}</p>
        </div>
      )}
      <div className="h-[100px] px-4 py-2">
        <h1 className="text-white text-xl font-bold truncate">{name}</h1>
        <div className="mt-2 flex items-center w-fit bg-black rounded-md">
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
    </div>
  );
};

export default PopularTVShowCard;
