import React, { ReactNode, useMemo, useReducer } from "react";
import FilterContext, { initialValue } from "./context";
import filterReducer from "./reducer";

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const [filter, dispatchFilter] = useReducer(
    filterReducer,
    initialValue.filter
  );

  const filterMemo = useMemo(
    () => ({ filter, dispatchFilter }),
    [filter, dispatchFilter]
  );

  return (
    <FilterContext.Provider value={filterMemo}>
      {children}
    </FilterContext.Provider>
  );
}
