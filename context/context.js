import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOCAL_STORAGE_FAVORITES_KEY = "@favorites";
const LOCAL_STORAGE_SHOPPING_KEY = "@shopping";

export const context = createContext({});

export function ContextProvider({ children }) {
  const [countFavoriteItems, setCountFavoriteItems] = useState(0);
  const [countShoppingItems, setCountShoppingItems] = useState(0);

  const updateCountFavoriteItemsFromLocalStorage = async () => {
    try {
      const localStorageData =
        (await AsyncStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)) || "[]";
      setCountFavoriteItems(JSON.parse(localStorageData).length);
    } catch (error) {
      // Handle potential parsing errors or AsyncStorage errors here
    }
  };

  const updateCountShoppingItemsFromLocalStorage = async () => {
    try {
      const localStorageData =
        (await AsyncStorage.getItem(LOCAL_STORAGE_SHOPPING_KEY)) || "[]";
      setCountShoppingItems(JSON.parse(localStorageData).length);
    } catch (error) {
      // Handle potential parsing errors or AsyncStorage errors here
    }
  };

  useEffect(() => {
    async function initialize() {
      await updateCountFavoriteItemsFromLocalStorage();
    }
    initialize();
  }, []);

  return (
    <context.Provider
      value={{
        countFavoriteItems,
        updateCountFavoriteItemsFromLocalStorage,
        countShoppingItems,
        updateCountShoppingItemsFromLocalStorage,
      }}
    >
      {children}
    </context.Provider>
  );
}
