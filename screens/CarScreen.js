import { FlatList, View, Text, TouchableOpacity } from "react-native";

import React, { useEffect, useState, useContext } from "react";
import InputText from "../components/InputText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoffeeCard from "../components/CoffeeCard";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { context } from "../context/context";

export default function CarScreen({ navigation }) {
  const [data, setData] = useState([]);
  const { updateCountShoppingItemsFromLocalStorage } = useContext(context);

  useEffect(() => {
    fillData();
  });

  const goBack = () => {
    navigation.goBack();
  };

  const fillData = async () => {
    const localStorageData = (await AsyncStorage.getItem("@shopping")) || "[]";

    setData(JSON.parse(localStorageData));
  };

  const removeItemShopping = async (id) => {
    const newArray = data.filter((item) => item.id !== id);

    await AsyncStorage.setItem("@shopping", JSON.stringify(newArray));

    fillData();
    updateCountShoppingItemsFromLocalStorage();
  };

  return (
    <View className="bg-[#0C0F14] flex-1 p-4">
      <TouchableOpacity
        onPress={goBack}
        className="w-12 h-12 bg-[#141821] rounded-2xl justify-center items-center"
      >
        <AntDesign name="arrowleft" color="#4D515A" size={25} />
      </TouchableOpacity>
      <InputText />
      <FlatList
        ListEmptyComponent={
          <View className=" justify-center items-center flex-row gap-x-5 mt-6">
            <Text className="text-white font-bold text-3xl text-center">
              List empty..
            </Text>
            <MaterialIcons name="search-off" size={30} color="white" />
          </View>
        }
        data={data}
        contentContainerStyle={{ gap: 15, marginTop: 15 }}
        renderItem={({ item }) => (
          <CoffeeCard
            sizeIcon={25}
            onPress={() => removeItemShopping(item.id)}
            page="car"
            data={item}
          />
        )}
      />
    </View>
  );
}
