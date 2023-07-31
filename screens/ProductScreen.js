import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import {
  Fontisto,
  AntDesign,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import { BlurView } from "expo-blur";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { context } from "../context/context";

const LOCAL_STORAGE_FAVORITES_KEY = "@favorites";
const LOCAL_STORAGE_SHOPPING_KEY = "@shopping";

export default function ProductScreen({ navigation, route }) {
  const [sizeSelected, setSizeSelected] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const {
    updateCountFavoriteItemsFromLocalStorage,
    updateCountShoppingItemsFromLocalStorage,
  } = useContext(context);

  const sizes = ["S", "M", "L"];

  const data = route.params.item;

  const goBack = () => {
    navigation.goBack();
  };

  const getItemsFromLocalStorage = async (key) => {
    const localStorageData = (await AsyncStorage.getItem(key)) || "[]";
    return JSON.parse(localStorageData);
  };

  const addFavorite = async () => {
    const favorites = await getItemsFromLocalStorage(
      LOCAL_STORAGE_FAVORITES_KEY,
    );

    const isExists = favorites.some((item) => item.id === data.id);

    if (!isExists) {
      favorites.push(data);

      console.log(favorites);

      await AsyncStorage.setItem(
        LOCAL_STORAGE_FAVORITES_KEY,
        JSON.stringify(favorites),
      );

      updateCountFavoriteItemsFromLocalStorage();
    }
  };

  const AddShoppingItem = async () => {
    const shoppingItems = await getItemsFromLocalStorage(
      LOCAL_STORAGE_SHOPPING_KEY,
    );

    const isExists = shoppingItems.some((item) => item.id === data.id);

    if (!isExists) {
      shoppingItems.push(data);

      await AsyncStorage.setItem(
        LOCAL_STORAGE_SHOPPING_KEY,
        JSON.stringify(shoppingItems),
      );

      updateCountShoppingItemsFromLocalStorage();
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const favorites = await getItemsFromLocalStorage(
        LOCAL_STORAGE_FAVORITES_KEY,
      );
      const isExists = favorites.some((item) => item.id === data.id);
      setFavorite(isExists);
    };
    initialize();
  }, []);

  return (
    <View className="bg-[#0C0F14] flex-1 px-5 py-1 items-center">
      <ImageBackground
        source={data.image}
        resizeMode="cover"
        className="w-full h-[60%] rounded-3xl overflow-hidden justify-between"
        imageStyle={{ height: "100%" }}
      >
        <View className="flex-row p-5 justify-between">
          <TouchableOpacity
            onPress={goBack}
            className="w-12 h-12 bg-[#141821] rounded-2xl justify-center items-center"
          >
            <AntDesign name="arrowleft" color="#4D515A" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={addFavorite}
            className=" w-12 h-12 bg-[#141821] rounded-2xl justify-center items-center"
          >
            <AntDesign
              name="heart"
              color={favorite ? "red" : "#4D515A"}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <BlurView
          intensity={121}
          tint="dark"
          className="h-[40%] p-5 flex-row overflow-hidden rounded-3xl justify-between items-center"
        >
          <View className="justify-between h-[80%]">
            <View className="gap-y-1">
              <Text className="text-white font-bold text-2xl">
                {data?.name}
              </Text>
              <Text className="text-[#4D515A]">{data?.included}</Text>
            </View>
            <View className="flex-row gap-x-2 items-center">
              <AntDesign name="star" size={20} color="#D98046" />
              <Text className="text-white text-lg font-semibold">
                {data?.rating}
              </Text>
            </View>
          </View>
          <View className="justify-center">
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
            <View className=" mt-3 justify-center items-center">
              <Text className="text-white text-center p-2  w-full bg-[#141821] rounded-2xl">
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
            {data?.description}
          </Text>
        </View>

        <View className="flex-row mt-3 gap-x-2 justify-center items-center">
          {sizes.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSizeSelected(item)}
              className="bg-[#141821] border-2 border-w rounded-lg w-28 h-10 justify-center items-center"
              style={{
                borderColor: sizeSelected === item ? "#D98046" : "#141821",
              }}
            >
              <Text className="text-white font-bold text-xl">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="justify-between items-center flex-row mt-3">
          <View className="items-center">
            <Text className="text-[#4D515A] text-xl">Price</Text>
            <View className="flex-row gap-x-2 items-center justify-center">
              <Text className="text-[#D98046] font-bold text-2xl">$</Text>
              <Text className="text-white text-2xl">{data?.price}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={AddShoppingItem}
            disabled={!(sizeSelected !== null)}
            className="bg-[#D98046] rounded-xl justify-center items-center w-36 h-12"
            style={{ opacity: !(sizeSelected !== null) ? 0.2 : 1 }}
          >
            <MaterialIcons name="shopping-cart" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar />
    </View>
  );
}
