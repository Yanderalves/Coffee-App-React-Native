import { View, StatusBar, Dimensions, Image } from "react-native";
import React from "react";
import { Carousel } from "react-native-snap-carousel";
import coffees from "../constants";

const { width, height } = Dimensions.get("screen");

export default function Starter() {
  return (
    <View className="h-2/4">
      <Carousel
        data={coffees}
        itemWidth={width}
        sliderWidth={width}
        renderItem={({ item }) => (
          <View>
            <Image
              resizeMode="cover"
              className="w-screen h-full px-8"
              source={item.image}
            />
          </View>
        )}
        useScrollView={true}
        containerCustomStyle={{
          backgroundColor: "#0C0F14",
          height: height / 2,
        }}
      ></Carousel>
    </View>
  );
}
