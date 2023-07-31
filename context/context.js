import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOCAL_STORAGE_KEY = "@favorites";

export const context = createContext({});

export function ContextProvider({ children }) {
  const [countItems, setCountItems] = useState(0);

  const updateCountItemsFromLocalStorage = async () => {
    try {
      const localStorageData =
        (await AsyncStorage.getItem(LOCAL_STORAGE_KEY)) || "[]";
      setCountItems(JSON.parse(localStorageData).length);
    } catch (error) {
      // Handle potential parsing errors or AsyncStorage errors here
    }
  };

  useEffect(() => {
    async function initialize() {
      await updateCountItemsFromLocalStorage();
    }
    initialize();
  }, []);

  return (
    <context.Provider value={{ countItems, updateCountItemsFromLocalStorage }}>
      {children}
    </context.Provider>
  );
}
