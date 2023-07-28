import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import Starter from "../screens/StarterScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "default" }}
    >
      <Stack.Screen name="starter" component={Starter} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={ProductScreen} />
    </Stack.Navigator>
  );
}
