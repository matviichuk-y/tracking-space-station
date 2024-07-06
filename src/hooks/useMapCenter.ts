import { useEffect, useState } from "react";
import { ISSLocation } from "../types/iss";
import { convertLocationToLtnLanguage } from "../utils/convert-coordinates";

export const useMapCenter = (location: ISSLocation) => {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (location) {
      const newCenter = convertLocationToLtnLanguage(location);
      setMapCenter(newCenter);
    }
  }, [location]);

  return mapCenter;
};
