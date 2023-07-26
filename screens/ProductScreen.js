import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Fontisto, AntDesign, Ionicons } from "@expo/vector-icons";

import { BlurView } from "expo-blur";

const data = {
  id: 1,
  name: "Cappuccino",
  image: require("../assets/coffees/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg"),
  price: "2.00",
  description:
    "Cappuccino is a coffee drink made with espresso and hot milk. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
  categoryId: 1,
  rating: 4.5,
  included: "With Oat milk",
};

export default function ProductScreen() {
  return (
    <View className="bg-[#0C0F14] flex-1 p-5">
      <ImageBackground
        source={data.image}
        resizeMode="cover"
        className="w-full h-[65%] rounded-3xl overflow-hidden justify-between"
        imageStyle={{ height: "100%" }}
      >
        <View className="flex-row p-5 justify-between">
          <TouchableOpacity className="w-12 h-12 bg-[#141821] rounded-2xl justify-center items-center">
            <AntDesign name="arrowleft" color="#4D515A" size={25} />
          </TouchableOpacity>
          <TouchableOpacity className=" w-12 h-12 bg-[#141821] rounded-2xl justify-center items-center">
            <AntDesign name="heart" color="#4D515A" size={25} />
          </TouchableOpacity>
        </View>
        <BlurView
          intensity={121}
          tint="dark"
          className="h-[40%] p-5 flex-row overflow-hidden rounded-3xl justify-between items-center"
        >
          <View className="justify-between h-[80%]">
            <View className="gap-y-1">
              <Text className="text-white font-bold text-2xl">{data.name}</Text>
              <Text className="text-[#4D515A]">{data.included}</Text>
            </View>
            <View className="flex-row gap-x-2 items-center">
              <AntDesign name="star" size={20} color="#D98046" />
              <Text className="text-white text-lg font-semibold">
                {data.rating}
              </Text>
            </View>
          </View>
          <View className="justify-center items-center">
            <View className="flex-row gap-x-3">
              <View className="bg-[#141821] w-16 h-16 gap-y-1 p-2 rounded-2xl justify-center items-center">
                <Fontisto name="coffeescript" color="white" size={20} />
                <Text className="text-white">Coffee</Text>
              </View>
              <View className="bg-[#141821] w-16 h-16 gap-y-1 p-2 rounded-2xl justify-center items-center">
                <Ionicons name="water" color="white" size={20} />
                <Text className="text-white">Milk</Text>
              </View>
            </View>
            <View className=" mt-3">
              <Text className="text-white bg-[#141821] gap-y-1 p-3 rounded-2xl">
                Medium rosted
              </Text>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
      <View></View>
    </View>
  );
}
