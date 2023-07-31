import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";

export default function LabelCoffeeCard({ data, onPress, categorySelected }) {
  const color = categorySelected === data.id ? "#D98046" : "#4D515A";
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row p-2 rounded-full justify-center items-center"
    >
      <Fontisto name="coffeescript" size={18} color={color} />
      <Text style={{ color }} className={`font-semibold text-lg ml-4`}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
}
