import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function index() {
  const [textInput, setTextInput] = useState("");
  return (
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
  );
}
