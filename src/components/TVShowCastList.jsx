import { useParams } from "react-router-dom";
import useTVShowCredits from "../hooks/useTVShowsCredits";
import TVShowCast from "./TVShowCast";

const TVShowCastList = () => {
  const { tvShowId } = useParams();
  const tvShowCredit = useTVShowCredits(tvShowId);

  return (
    <div className="flex mx-2">
      {tvShowCredit.map((cast) => (
        <TVShowCast key={cast.id} castList={cast} />
      ))}
    </div>
  );
};

export default TVShowCastList;
