import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={HomeScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}
