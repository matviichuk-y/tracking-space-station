import { useQuery, useQueryClient } from "react-query";
import { getISSCrew, getISSLocation } from "../api";
import { ISSMember, ISSLocation } from "../types/iss";

export const useISSData = () => {
  const queryClient = useQueryClient();

  const {
    data: location,
    isLoading: locationLoading,
    error: locationError,
  } = useQuery<ISSLocation, Error>("issLocation", getISSLocation, {
    refetchInterval: 5000,
    refetchOnWindowFocus: false,
    onSuccess: () => queryClient.invalidateQueries("issCrew"),
  });

  const {
    data: crew,
    isLoading: crewLoading,
    error: crewError,
  } = useQuery<ISSMember[], Error>("issCrew", getISSCrew, {
    enabled: !!location,
    refetchOnWindowFocus: false,
  });

  const isLoading = locationLoading || crewLoading;
  const error = locationError || crewError;

  return { location, crew, isLoading, error };
};
