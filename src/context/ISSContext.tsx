import { FC, createContext } from "react";
import { ISSContextType, ISSProviderProps } from "../types/context-type";
import { useISSData } from "../hooks/useISSData";

export const ISSContext = createContext<ISSContextType | undefined>(undefined);

export const ISSProvider: FC<ISSProviderProps> = ({ children }) => {

    const { location, crew, isLoading, error } = useISSData();

    return <ISSContext.Provider value={{ location, crew, isLoading, error }}>
        {children}
    </ISSContext.Provider>
}