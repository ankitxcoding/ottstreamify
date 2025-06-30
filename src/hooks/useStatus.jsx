import { useEffect, useState } from "react";

const useStatus = () => {
  const [interentStatus, setInternetStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setInternetStatus(false);
    });
    window.addEventListener("online", () => {
      setInternetStatus(true);
    });
  }, []);

  return interentStatus;
};

export default useStatus;
