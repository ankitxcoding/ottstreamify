import useStatus from "../hooks/useStatus";

const Header = () => {
  const networkStatus = useStatus();

  return (
    <div className="flex w-screen absolute justify-between bg-gradient-to-b from-black">
      <div className="w-52 mx-4">
        <img src="/assets/logo.png" alt="logo" />
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
