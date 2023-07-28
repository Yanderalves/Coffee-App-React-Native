import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { themeColors } from "../theme";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import coffees from "../constants/";
import LabelCoffeeCard from "../components/LabelCoffeCard";
import CoffeeCard from "../components/CoffeeCard";

export default function HomeScreen({ navigation }) {
  const [categorySelectedId, setCategorySelectedId] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [cardsFiltered, setCardsFiltered] = useState(coffees);

  const gotToDetails = (item) => {
    navigation.navigate("details", { item });
  };

  const filterCards = () => {
    let newArray;
    if ((categorySelectedId !== null) & (textInput !== null)) {
      newArray = coffees.filter((item) => {
        return (
          item.name.toLowerCase().includes(textInput.toLowerCase()) &
          (item.categoryId === categorySelectedId)
        );
      });
    } else if (categorySelectedId !== null) {
      newArray = coffees.filter((item) => {
        return item.categoryId === categorySelectedId;
      });
    } else if ((categorySelectedId === null) & (textInput !== "")) {
      newArray = coffees.filter((item) => {
        return item.name.toLowerCase().includes(textInput.toLowerCase());
      });
    }

    setCardsFiltered(newArray);
  };

  const handleCategory = (item) => {
    if (item.id === categorySelectedId) {
      setCategorySelectedId(null);
    } else {
      setCategorySelectedId(item.id);
    }
  };

  useEffect(() => {
    if (textInput !== "" || categorySelectedId !== null) {
      filterCards();
    } else {
      setCardsFiltered(coffees);
    }
  }, [textInput, categorySelectedId]);

  return (
    <View className={`bg-[#0C0F14] flex-1 p-5`}>
      <StatusBar backgroundColor={themeColors.primary} />
      <View className="flex flex-row justify-between">
        <TouchableOpacity className="bg-[#4D515A] rounded-lg p-2">
          <Entypo name="menu" size={30} color={themeColors.white} />
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#4D515A] rounded-lg p-2">
          <Entypo name="user" size={30} color={themeColors.white} />
        </TouchableOpacity>
      </View>
      <Text numberOfLines={2} className="text-[#FFFFFF] text-3xl w-3/5 mt-6">
        Find the best coffee for you
      </Text>
      <View className="relative">
        <TextInput
          value={textInput}
          onChangeText={setTextInput}
          placeholder="Find your coffee.."
          className="bg-[#141821] text-white rounded-3xl py-4 px-14 mt-5 text-base"
          placeholderTextColor="#4D515A"
        ></TextInput>
        <TouchableOpacity className="absolute top-[37] left-4">
          <FontAwesome name="search" size={28} color="#4D515A" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={coffees}
          renderItem={({ item }) => (
            <LabelCoffeeCard
              onPress={() => handleCategory(item)}
              categorySelected={categorySelectedId}
              data={item}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ gap: 15, marginTop: 16 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={cardsFiltered}
        renderItem={({ item }) => (
          <CoffeeCard onPress={() => gotToDetails(item)} data={item} />
        )}
        numColumns={"2"}
      />
    </View>
  );
}
