import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import {
  BASE_BACKDROP_URL,
  BASE_POSTER_URL,
  IMDB_URL,
} from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useState } from "react";
import useMovieBackdropImg from "../hooks/useMovieBackdropImg";
import MovieCastList from "./MovieCastList";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movieDetails = useMovieDetails(movieId);
  const movieTrailer = useMovieTrailer(movieId);
  const backdropImage = useMovieBackdropImg(movieId);
  const [showTrailer, setShowTrailer] = useState(false);
  const bgImg = backdropImage?.backdrops && backdropImage?.backdrops[0]?.file_path;

  const {
    title,
    backdrop_path,
    genres,
    homepage,
    imdb_id,
    vote_average,
    tagline,
    runtime,
    release_date,
    overview,
    status,
  } = movieDetails;

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
        <div className="mt-24 flex flex-col justify-center items-center rounded-md overflow-hidden bg-black bg-opacity-50">
          <img src={BASE_POSTER_URL + backdrop_path} alt={title} />
          <h1 className="m-1 text-white text-3xl font-bold">{title}</h1>
          <h2 className="m-1 text-white text-sm font-semibold">
            ({tagline === "" ? "NA" : tagline})
          </h2>
          <h2 className="m-1 text-white text-xs">
            Release Date - {release_date} · Duration - {runtime} Minutes
          </h2>
          <p className="m-1 text-white text-xs whitespace-normal max-w-sm text-justify">
            {overview}
          </p>
          <h2 className="m-1 text-white text-sm font-semibold">
            {formattedGenres}
          </h2>
          <p className="m-1 text-white text-xs">Release Status - ({status})</p>
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
        <div className="no-scrollbar my-5 py-2 overflow-x-scroll w-1/2 bg-black bg-opacity-50 rounded-md">
          <MovieCastList />
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
    </>
  );
};
export default MovieDetails;
