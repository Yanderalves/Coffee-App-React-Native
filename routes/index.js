import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabRoutes from "./tabs.routes";
import { ContextProvider } from "../context/context";

export default function Routes() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <TabRoutes />
      </ContextProvider>
    </NavigationContainer>
  );
}
