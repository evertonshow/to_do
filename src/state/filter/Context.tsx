import { createContext } from "react";

export interface FilterContextType {
  filter: string;
  dispatchFilter: (filter: string) => void;
}

export const initialValue = {
  filter: "all",
  dispatchFilter: () => {},
};

const Context = createContext<FilterContextType>(initialValue);

export default Context;
