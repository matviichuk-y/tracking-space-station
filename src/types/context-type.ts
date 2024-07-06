import { ISSLocation, ISSMember } from "./iss";

export interface ISSContextType {
  location: ISSLocation | undefined;
  crew: ISSMember[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export interface ISSProviderProps {
  children: React.ReactNode;
}
