import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Entypo } from "@expo/vector-icons";

export default function CoffeeCard({
  data,
  onPress,
  page = "details",
  sizeIcon = 35,
}) {
  return (
    <BlurView
      intensity="10"
      tint="light"
      className="bg-[#4D515A] flex-grow mt-5 mx-1 overflow-visible rounded-3xl  max-h-72 p-3"
    >
      <ImageBackground
        resizeMode="cover"
        source={data.image}
        className="bg-white border-[1px] border-[#D17742] h-2/4 rounded-3xl overflow-hidden relative"
        imageStyle={{ height: "100%" }}
      >
        <BlurView
          intensity={90}
          tint="dark"
          className="flex-row absolute pr-5 pl-2 py-1 gap-x-1 rounded-tr-x rounded-bl-3xl right-0"
        >
          <Entypo name="star" color="#D98046" size={20} />
          <Text className="text-white font-bold">{data.rating}</Text>
        </BlurView>
      </ImageBackground>

      <View className="h-2/4 flex justify-center">
        <View className="mt-2">
          <Text className="text-white font-bold text-xl">{data.name}</Text>
          <Text className="text-[#4D515A] font-semibold text-base">
            {data.included}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row">
            <Text className="text-[#D17742] mr-2 text-xl">$</Text>
            <Text className="text-white text-xl">{data.price}</Text>
          </View>
          <TouchableOpacity
            onPress={onPress}
            className="rounded-3xl bg-[#D17742] p-1"
          >
            <Entypo
              name={page === "details" ? "plus" : "trash"}
              size={sizeIcon}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
}
