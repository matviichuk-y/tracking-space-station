import { ISSLocation } from "../types/iss";

export const convertLocationToLtnLanguage = (location: ISSLocation) => {
  return {
    lat: parseFloat(location.latitude),
    lng: parseFloat(location.longitude),
  };
};
