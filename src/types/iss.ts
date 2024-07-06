export interface ISSLocation {
  latitude: string;
  longitude: string;
}

export interface ISSLocationResponse {
  message: string;
  timestamp: number;
  iss_position: ISSLocation;
}

export interface ISSMember {
  name: string;
  craft: string;
}

export interface ISSCrewResponse {
  message: string;
  number: number;
  people: ISSMember[];
}
