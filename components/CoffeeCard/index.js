import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Entypo } from "@expo/vector-icons";

export default function coffeeCard({ data }) {
  return (
    <BlurView
      intensity="7"
      className="bg-[#4D515A] mt-5 overflow-visible rounded-3xl  max-h-72 p-3"
      style={{
        flexGrow: 1,
        margin: 4,
      }}
    >
      <Image
        className="w-full h-2/4 rounded-3xl self-center"
        source={data.image}
      />
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
          <TouchableOpacity className="rounded-xl bg-[#D17742]">
            <Entypo name="plus" size={35} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
}