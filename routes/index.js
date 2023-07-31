import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabRoutes from "./tabs.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
