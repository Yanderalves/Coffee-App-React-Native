import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Fontisto, AntDesign, Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { BlurView } from "expo-blur";

export default function ProductScreen({ navigation }) {
  const sizes = ["S", "M", "L"];

  const routes = useRoute();

  const data = routes.params.item;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View className="bg-[#0C0F14] flex-1 px-5 py-1 items-center">
      <ImageBackground
        source={data.image}
        resizeMode="cover"
        className="w-full h-[65%] rounded-3xl overflow-hidden justify-between"
        imageStyle={{ height: "100%" }}
      >
        <View className="flex-row p-5 justify-between">
          <TouchableOpacity
            onPress={goBack}
            className="w-12 h-12 bg-[#141821] rounded-2xl justify-center items-center"
          >
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
      <View className="mt-3">
        <View className="gap-y-4 px-5">
          <Text className="text-white font-bold text-xl">Description</Text>
          <Text numberOfLines={2} className="text-white text-base leading-7">
            {data.description}
          </Text>
        </View>
        <View className="flex-row mt-3 gap-x-2 justify-center items-center">
          {sizes.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-[#141821] rounded-lg w-28 h-10 justify-between items-center"
            >
              <Text className="text-white font-bold text-xl">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="justify-between flex-row mt-3 px-5">
          <View className="items-center">
            <Text className="text-[#4D515A] text-xl">Price</Text>
            <View className="flex-row gap-x-1">
              <Text className="text-[#D98046] text-2xl">$</Text>
              <Text className="text-white text-2xl">{data.price}</Text>
            </View>
          </View>
          <TouchableOpacity className="bg-[#D98046] rounded-xl justify-center items-center p-3 w-36 h-14">
            <Text className="text-white font-bold text-xl">Buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar />
    </View>
  );
}
