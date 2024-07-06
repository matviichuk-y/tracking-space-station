import { useEffect, useState } from "react";

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const utcString = new Date().toUTCString();
      setCurrentTime(`Current UTC time: ${utcString}`);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return currentTime;
};
