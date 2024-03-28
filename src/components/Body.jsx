import { Link } from "react-router-dom";
import bgBanner from "../assets/banner.gif";

const Body = () => {
  return (
    <>
      <div
        className="flex items-center justify-center h-screen"
        style={{
          background: `url(${bgBanner})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col">
          <Link to={"/movies"}>
            <button className="m-5 px-2 text-white bg-transparent text-8xl font-semibold border-2 border-white rounded-lg hover:bg-white hover:text-black duration-300">
              MOVIES
            </button>
          </Link>
          <button className="m-5 px-2 text-white bg-transparent text-8xl font-semibold border-2 border-white rounded-lg hover:bg-white hover:text-black duration-300">
            SERIES
          </button>
        </div>
      </div>
    </>
  );
};
export default Body;
