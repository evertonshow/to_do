import { createContext } from "react";

export interface TodosContextType {
  todos: object[];
  dispatchTodos: (todo: any) => void;
}

export const initialValue = {
  todos: [],
  dispatchTodos: () => {},
};

const Context = createContext<TodosContextType>(initialValue);

export default Context;
