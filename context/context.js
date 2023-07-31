import { useEffect, createContext } from "react";

export const context = createContext({});

export function ContextProvider({ children }) {
  let items = 0;

  const incrementItems = () => {
    items++;
  };

  const decrementItems = () => {
    items--;
  };

  return (
    <context.Provider value={{ items, incrementItems, decrementItems }}>
      {children}
    </context.Provider>
  );
}
