import { useState } from "react";
import MoviePlayerOverlay from "./MoviePlayerOverlay";

const OttPlayer = ({ tmdb_id }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVideoOpen(true)}
        className="m-1 px-2 py-1 text-black font-semibold bg-white hover:bg-zinc-400 rounded-md"
      >
        Watch Movie
      </button>

      <MoviePlayerOverlay
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        tmdb_id={tmdb_id}
      />
    </>
  );
};

export default OttPlayer;
