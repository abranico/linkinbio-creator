import { createContext, useContext } from "react";
import useLinks from "../hooks/useLinks";
import { ILink, ILinkinbio } from "../types";

type ILinkinbioContextProvider = {
  children: React.ReactNode;
};

type ILinkinbioContext = {
  linkinbio: ILinkinbio;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    name: "name" | "description"
  ) => void;
  addLink: ({ id, social, title, url }: ILink) => void;
  removeLink: (id: string) => void;
};

export const LinkinbioContext = createContext<ILinkinbioContext | null>(null);

const LinkinbioContextProvider = ({ children }: ILinkinbioContextProvider) => {
  const { linkinbio, handleChange, addLink, removeLink } = useLinks();

  return (
    <LinkinbioContext.Provider
      value={{ linkinbio, handleChange, addLink, removeLink }}
    >
      {children}
    </LinkinbioContext.Provider>
  );
};

export const useLinkinbioContext = () => {
  const context = useContext(LinkinbioContext);
  if (!context) {
    throw new Error(
      "useLinkinbioContext must be used within a LinkinbioContextProvider"
    );
  }
  return context;
};

export default LinkinbioContextProvider;
