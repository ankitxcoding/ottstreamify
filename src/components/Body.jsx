import { Link } from "react-router-dom";
import bgBanner from "../assets/banner.gif";

const Body = () => {
  return (
    <>
      <div
        className="flex items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${bgBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col px-4">
          <button className="m-2 sm:m-5 p-2 text-white bg-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold border-2 border-white rounded-lg hover:bg-white hover:text-black duration-300">
            <Link to={"/movies"}>MOVIES</Link>
          </button>
          <button className="m-2 sm:m-5 p-2 text-white bg-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold border-2 border-white rounded-lg hover:bg-white hover:text-black duration-300">
            <Link to={"/tvShows"}>SERIES</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
