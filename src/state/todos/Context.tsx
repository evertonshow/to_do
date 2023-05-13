import { createContext } from "react";

export interface FilterContextType {
  todos: any[];
  dispatchTodos: (todos: []) => void;
}

export const initialValue = {
  todos: [],
  dispatchTodos: () => {},
};

const Context = createContext<FilterContextType>(initialValue);

export default Context;
