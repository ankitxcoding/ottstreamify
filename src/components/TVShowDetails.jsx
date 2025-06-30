import { useParams } from "react-router-dom";
import useTVShowDetails from "../hooks/useTVShowDetails";
import {
  BASE_BACKDROP_URL,
  BASE_POSTER_URL,
  IMDB_URL,
} from "../utils/constants";
import useTVShowTrailer from "../hooks/useTVShowTrailer";
import { useState } from "react";
import useTVShowBackdropImg from "../hooks/useTVShowBackdropImg";
import TVShowsCastList from "./TVShowCastList";
import OttTVShowPlayer from "./OttTVShowPlayer";
import useTVShowExternalDetails from "../hooks/useTVShowExternalDetails";

const TVShowDetails = () => {
  const { tvShowId } = useParams();
  const tvShowDetails = useTVShowDetails(tvShowId);
  const tvShowExternalDetails = useTVShowExternalDetails(tvShowId);
  const tvShowTrailer = useTVShowTrailer(tvShowId);
  const backdropImage = useTVShowBackdropImg(tvShowId);
  const [showTrailer, setShowTrailer] = useState(false);
  const bgImg =
    backdropImage?.backdrops && backdropImage.backdrops[0]?.file_path;

  const {
    name,
    backdrop_path,
    genres,
    vote_average,
    tagline,
    number_of_seasons,
    number_of_episodes,
    first_air_date,
    last_air_date,
    overview,
    status,
  } = tvShowDetails;

  const { id, imdb_id } = tvShowExternalDetails;

  const formattedGenres =
    genres && genres.map((genre) => genre?.name).join(", ");

  const toggleVideo = () => {
    setShowTrailer(!showTrailer);
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
      BASE_BACKDROP_URL + bgImg
    })`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center min-h-screen"
        style={backgroundStyle}
      >
        <div className="mt-28 sm:mt-24 flex flex-col justify-center items-center rounded-md overflow-hidden bg-black bg-opacity-50 w-full sm:w-auto px-4 sm:px-0">
          <img
            src={BASE_POSTER_URL + backdrop_path}
            alt={name}
            className="w-full sm:w-auto"
          />
          <h1 className="m-1 text-white text-xl sm:text-3xl font-bold">
            {name}
          </h1>
          <h2 className="m-1 text-stone-400 text-xs sm:text-sm font-semibold">
            ({tagline === "" ? "NA" : tagline})
          </h2>
          <p className="m-1 text-white text-xs whitespace-normal max-w-[90%] sm:max-w-sm text-justify">
            {overview}
          </p>
          <h2 className="m-1 text-stone-400 text-[10px] sm:text-xs">
            Number Of Seasons - {number_of_seasons} · Number Of Episodes -{" "}
            {number_of_episodes}
          </h2>
          <h2 className="mx-1 text-stone-400 text-[10px] sm:text-xs">
            First Air - {first_air_date} · Last Air - {last_air_date}
          </h2>
          <p className="m-1 text-stone-400 text-[10px] sm:text-xs">
            Status - ({status})
          </p>
          <h2 className="m-1 text-white text-xs sm:text-sm font-semibold">
            {formattedGenres}
          </h2>
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-2 mb-2">
            <a
              href={IMDB_URL + imdb_id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-9 m-1 px-4 py-1.5 border border-white flex items-center justify-center bg-black hover:bg-zinc-900 rounded-md">
                <i className="fa-solid fa-star text-yellow-500 text-base"></i>
                <h2
                  className={`text-base font-semibold ${
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
                    vote_average && vote_average.toFixed(1)
                  )}
                </h2>
                <h3 className="text-gray-400 text-xs">/10</h3>
              </div>
            </a>
            <button
              onClick={toggleVideo}
              className="h-9 m-1 px-4 py-1.5 text-white text-base font-semibold bg-[#E50914] hover:bg-[#e50914c0] rounded-md"
            >
              {showTrailer ? "Hide Trailer" : "Watch Trailer"}
            </button>
            <OttTVShowPlayer tmdb_id={id} />
          </div>
        </div>
        <div className="no-scrollbar my-5 py-2 overflow-x-scroll w-[90%] sm:w-1/2 bg-black bg-opacity-50 rounded-md">
          <TVShowsCastList />
        </div>
        {showTrailer && tvShowTrailer ? (
          <div className="fixed inset-0 bg-neutral-800 bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl">
              <button
                onClick={toggleVideo}
                className="m-4 absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${tvShowTrailer}?autoplay=1&mute=1`}
                  className="absolute top-0 left-0 w-full h-full"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        ) : (
          showTrailer && (
            <div className="w-[90%] sm:w-2/3 h-5/6 flex justify-center items-center bg-black absolute">
              <p className="text-white text-3xl sm:text-7xl text-center">
                Trailer Not Found!
              </p>
              <button
                onClick={toggleVideo}
                className="m-4 absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default TVShowDetails;
