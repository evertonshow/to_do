import { ReactNode, useMemo, useReducer } from "react";
import TodoContext, { initialValue } from "./Context";
import TodoReducer from "./reducer";

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const [todos, dispatchTodos] = useReducer(TodoReducer, initialValue.todos);

  const filterMemo = useMemo(
    () => ({ todos, dispatchTodos }),
    [todos, dispatchTodos]
  );

  return (
    <TodoContext.Provider value={filterMemo}>{children}</TodoContext.Provider>
  );
}
