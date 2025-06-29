export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTExNDk0YmZkYzgxNWYyZDE5OTI3NzM3ZTE0M2I5OCIsInN1YiI6IjY1Y2RhYWFlMzEyMzQ1MDE3YmJhYzczOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGZ7T52BT2xFTLtG5yTvRLL6KinhW5F6teX32RWjxNI",
  },
};

export const MOVIES_BASE_API = "https://api.themoviedb.org/3/movie/";

export const TVSHOWS_BASE_API = "https://api.themoviedb.org/3/tv/";

export const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/original";

export const IMDB_URL = "https://www.imdb.com/title/";

export const MOVIE_STREAMING_URL = "https://player.vidsrc.co/embed/movie/";

export const MOVIE_STREAMING_PARAMETER =
  "?autoplay=false&autonext=true&nextbutton=true&poster=true&primarycolor=6C63FF&secondarycolor=9F9BFF&iconcolor=FFFFFF&fontcolor=FFFFFF&fontsize=16px&opacity=0.5&font=Poppins";

export const TVSHOW_STREAMING_URL = "https://player.vidsrc.co/embed/tv/";

export const TVSHOW_STREAMING_PARAMETER =
  "/1/1?autoplay=false&autonext=true&nextbutton=true&poster=true&primarycolor=6C63FF&secondarycolor=9F9BFF&iconcolor=FFFFFF&fontcolor=FFFFFF&fontsize=16px&opacity=0.5&font=Poppins";

export const TVSHOWS_EXTERNAL_DETAILS =
  "/external_ids?api_key=fe11494bfdc815f2d19927737e143b98";
