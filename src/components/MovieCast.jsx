import { BASE_POSTER_URL } from "../utils/constants";
import shimmerImg from "../assets/shimmerImg.png";

const MovieCast = (prop) => {
  const { castList } = prop;
  const { name, character, profile_path } = castList;
  console.log(castList);

  const castImage =
    profile_path === null ? shimmerImg : BASE_POSTER_URL + profile_path;

  return (
    <div>
      <div className="w-24 h-24 mx-2">
        <img
          src={castImage}
          className="w-full h-full object-cover rounded-full bg-zinc-800"
        />
      </div>
      <h1 className="text-white text-xs font-semibold text-center">{name}</h1>
      <h2 className="text-stone-500 text-xs text-center">{character}</h2>
    </div>
  );
};
export default MovieCast;
