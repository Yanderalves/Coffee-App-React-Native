import { createContext, useState } from "react";

export const context = createContext({});

export function ContextProvider({ children }) {
  const [items, setItems] = useState(0);

  const incrementItems = () => {
    setItems(items + 1);
  };

  const decrementItems = () => {
    setItems(items - 1);
  };

  return (
    <context.Provider value={{ items, incrementItems, decrementItems }}>
      {children}
    </context.Provider>
  );
}
