import useStatus from "../hooks/useStatus";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const networkStatus = useStatus();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMoviesPage = location.pathname === "/movies";
  const isTVShowsPage = location.pathname === "/tvShows";

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-gradient-to-b from-black absolute top-0 w-full">
      <div className="mx-auto sm:mx-4 w-32 sm:w-52 flex justify-center sm:justify-start">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-full mix-blend-screen" />
        </Link>
      </div>
      <div className="flex items-center mx-4">
        <ul className="flex flex-wrap justify-center w-full">
          {!isHome ? (
            <Link to={"/"}>
              <li className="m-2 sm:m-4 text-white text-lg sm:text-xl font-bold hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Home
              </li>
            </Link>
          ) : (
            <>
              <Link to={"/movies"}>
                <li className="m-2 sm:m-4 text-white text-lg sm:text-xl font-bold hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                  Movies
                </li>
              </Link>
              <Link to={"tvShows"}>
                <li className="m-2 sm:m-4 text-white text-lg sm:text-xl font-bold hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                  TV Shows
                </li>
              </Link>
            </>
          )}
          {isMoviesPage && (
            <Link to={"tvShows"}>
              <li className="m-2 sm:m-4 text-white text-lg sm:text-xl font-bold hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                TV Shows
              </li>
            </Link>
          )}
          {isTVShowsPage && (
            <Link to={"/movies"}>
              <li className="m-2 sm:m-4 text-white text-lg sm:text-xl font-bold hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Movies
              </li>
            </Link>
          )}
          <li className="m-2 sm:m-4 text-white text-lg sm:text-xl font-bold">
            Status{" "}
            {networkStatus ? (
              <span className="text-green-500">&#x2022;</span>
            ) : (
              <span className="text-red-500">&#x2022;</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
