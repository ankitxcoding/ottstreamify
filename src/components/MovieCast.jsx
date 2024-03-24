import { BASE_POSTER_URL } from "../utils/constants";

const MovieCast = (prop) => {
  const { castList } = prop;
  const { name, character, profile_path } = castList;
  console.log(castList);

  return (
    <div>
      <div className="w-24 h-24 mx-2">
        <img
          src={BASE_POSTER_URL + profile_path}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h1 className="text-white text-xs text-center">{name}</h1>
      <h2 className="text-white text-xs text-center">{character}</h2>
    </div>
  );
};
export default MovieCast;
