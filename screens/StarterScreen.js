import {
  Dimensions,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef } from "react";
import { Carousel, Pagination } from "react-native-snap-carousel";

const carouselMessages = [
  " The best grain, the finest roast, the most powerful flavor.",
  "Awakening the senses with each velvety sip, coffee unveils a symphony of flavors, a warm embrace that soothes the soul.",
  "From dawn's first light to dusk's embrace, coffee weaves its magic, energizing minds and fostering moments of connection.",
];

const { width } = Dimensions.get("window");

export const SLIDER_WIDTH = width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function Starter({ navigation }) {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <ImageBackground
      source={require("../assets/coffees/robbie-down-LI8inyHnm_A-unsplash.jpg")}
      className="px-2 pb-14 flex-1 bg-[#0C0F14] justify-end items-center"
      imageStyle={{ opacity: 0.3 }}
    >
      <Text
        numberOfLines={3}
        className="text-white leading-10 text-center font-bold w-52 text-3xl"
      >
        Good coffee, Good Friends, let it blends
      </Text>
      <Carousel
        layout="default"
        data={carouselMessages}
        itemWidth={ITEM_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        inactiveSlideOpacity={0}
        ref={isCarousel}
        onSnapToItem={(index) => setIndex(index)}
        contentContainerCustomStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        containerCustomStyle={{
          flexGrow: 0,
        }}
        renderItem={({ item }) => (
          <View className="mt-5">
            <Text
              numberOfLines={3}
              className="text-[#939eb6] text-base font-semibold text-center"
            >
              {item}
            </Text>
          </View>
        )}
      ></Carousel>
      <Pagination
        dotsLength={carouselMessages.length}
        containerStyle={{
          flexGrow: 0,
          justifyContent: "center",
          alignItems: "center",
          height: 15,
          width: 80,
          gap: 15,
        }}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "#D17742",
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.6}
        tappableDots={true}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        className="bg-[#D17742]  rounded-full px-20 py-3"
      >
        <Text className="text-white text-center font-semibold text-3xl">
          Get started
        </Text>
      </TouchableOpacity>
      <StatusBar />
    </ImageBackground>
  );
}
