import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { BASE_POSTER_URL, IMDB_URL } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useState } from "react";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movieDetails = useMovieDetails(movieId);
  const movieTrailer = useMovieTrailer(movieId);
  const [showTrailer, setShowTrailer] = useState(false);
  console.log(movieDetails);
  const {
    title,
    original_title,
    backdrop_path,
    genres,
    homepage,
    imdb_id,
    vote_average,
    overview,
  } = movieDetails;

  const formattedGenres =
    genres && genres.map((genre) => genre.name).join(", ");

  const toggleVideo = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <div className="bg-[url('/assets/bg1.jpg')] bg-cover flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center rounded-md overflow-hidden bg-black bg-opacity-50">
        <img src={BASE_POSTER_URL + backdrop_path} alt={original_title} />
        <h1 className="m-1 text-white text-3xl font-bold">{title}</h1>
        <p className="text-white text-xs whitespace-normal max-w-sm text-justify">
          {overview}
        </p>
        <h2 className="m-1 text-white text-sm font-semibold">
          {formattedGenres}
        </h2>
        <div className="flex mb-2">
          <a
            href={IMDB_URL + imdb_id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="m-1 px-2 py-1 border border-white flex items-center w-fit bg-black rounded-md">
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
                  vote_average && vote_average.toFixed(1)
                )}
              </h2>
              <h3 className="text-gray-400 text-xs mr-1">/10</h3>
            </div>
          </a>
          <button
            onClick={toggleVideo}
            className="m-1 px-2 py-1 text-white font-semibold bg-blue-500 rounded-md"
          >
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button>
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            <button className="m-1 px-2 py-1 text-black font-semibold bg-white rounded-md">
              Watch Movie
            </button>
          </a>
        </div>
      </div>
      {showTrailer && (
        <div className="video-container absolute">
          <iframe
            width="1080"
            height="608"
            src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <button
            onClick={toggleVideo}
            className="px-[7px] text-white bg-black hover:bg-[#E50914] rounded-full absolute -top-5 -right-4"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
      )}
    </div>
  );
};
export default MovieDetails;
