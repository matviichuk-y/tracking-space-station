import { useContext } from "react";
import { ISSContext } from "../context/ISSContext";

export const useISSContext = () => {
  const context = useContext(ISSContext);
  if (!context) {
    throw new Error("useISSContext must be used within an ISSProvider");
  }
  return context;
};
