import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOCAL_STORAGE_FAVORITES_KEY = "@favorites";

export const context = createContext({});

export function ContextProvider({ children }) {
  const [countFavoriteItems, setCountFavoriteItems] = useState(0);
  const [countShoppingItems, setCountShoppingItems] = useState(0);

  const handleValue = async (type) => {
    try {
      const localStorageData =
        JSON.parse(await AsyncStorage.getItem(type)) || "[]";
      console.log(localStorageData);
      if (type === LOCAL_STORAGE_FAVORITES_KEY) {
        setCountFavoriteItems(localStorageData.length);
      } else {
        setCountShoppingItems(localStorageData.length);
      }
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    async function initialize() {
      await handleValue(LOCAL_STORAGE_FAVORITES_KEY);
    }
    initialize();
  });

  return (
    <context.Provider
      value={{
        countFavoriteItems,
        countShoppingItems,
        handleValue,
      }}
    >
      {children}
    </context.Provider>
  );
}
