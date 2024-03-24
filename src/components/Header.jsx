import useStatus from "../hooks/useStatus";
import logo from "../assets/logo.png";

const Header = () => {
  const networkStatus = useStatus();

  return (
    <div className="flex justify-between bg-gradient-to-b from-black absolute top-0 w-full">
      <div className="w-52 mx-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center mx-4">
        <ul className="flex">
          <li className="m-4 text-white text-xl font-bold">
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
