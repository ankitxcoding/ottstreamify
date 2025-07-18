export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`,
  },
};

export const MOVIES_BASE_API = "https://api.themoviedb.org/3/movie/";

export const TVSHOWS_BASE_API = "https://api.themoviedb.org/3/tv/";

export const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/original";

export const IMDB_URL = "https://www.imdb.com/title/";

export const MOVIE_STREAMING_URL = "https://player.vidsrc.co/embed/movie/";

export const MOVIE_STREAMING_PARAMETER =
  "?autoplay=true&poster=true&primarycolor=db0000&secondarycolor=a2a2a2&iconcolor=eefdec";

export const TVSHOW_STREAMING_URL = "https://player.vidsrc.co/embed/tv/";

export const TVSHOW_STREAMING_PARAMETER =
  "/1/1?autoplay=true&autonext=true&nextbutton=true&poster=true&primarycolor=db0000&secondarycolor=a2a2a2&iconcolor=eefdec";

export const TVSHOWS_EXTERNAL_DETAILS = `/external_ids?api_key=${
  import.meta.env.VITE_TMDB_API_KEY
}`;

export const GITHUB_URL = "https://github.com/ankitxcoding/";

export const LINKEDIN_URL = "https://www.linkedin.com/in/ankitz9/";

export const TWITTER_URL = "https://twitter.com/theankitz9";

export const INSTAGRAM_URL = "https://www.instagram.com/ankitz9/";
