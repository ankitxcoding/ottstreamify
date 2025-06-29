import {
  MOVIE_STREAMING_PARAMETER,
  MOVIE_STREAMING_URL,
} from "../utils/constants";

const MoviePlayerOverlay = ({ isOpen, onClose, tmdb_id }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-800 bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        <button
          onClick={onClose}
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
            src={MOVIE_STREAMING_URL + tmdb_id + MOVIE_STREAMING_PARAMETER}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            title="Video Player"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePlayerOverlay;
