import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stack.routes";
import FavoritesScreen from "../screens/FavoritesScreen";
import CarScreen from "../screens/CarScreen";
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import { context } from "../context/context";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { countFavoriteItems, countShoppingItems } = useContext(context);
  return (
    <Tab.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },

        tabBarStyle: {
          backgroundColor: "#0C0F14",
          borderTopColor: "transparent",
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
          tabBarBadge: countFavoriteItems || null,
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={CarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-bag" size={size} color={color} />
          ),
          tabBarBadge: countShoppingItems || null,
        }}
      />
    </Tab.Navigator>
  );
}
