import axios from "axios";
import {
  ISSLocation,
  ISSLocationResponse,
  ISSMember,
  ISSCrewResponse,
} from "../types/iss";
import { ISS_CREW_URL, ISS_LOCATION_URL } from "./api-constants";

export const getISSLocation = async (): Promise<ISSLocation> => {
  const response = await axios.get<ISSLocationResponse>(ISS_LOCATION_URL);
  const { latitude, longitude } = response.data.iss_position;
  return { latitude, longitude };
};

export const getISSCrew = async (): Promise<ISSMember[]> => {
  const response = await axios.get<ISSCrewResponse>(ISS_CREW_URL);
  const issCrew = response.data.people.filter(
    (human: ISSMember) => human.craft === "ISS"
  );
  return issCrew;
};
