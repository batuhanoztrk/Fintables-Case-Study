import Color from "@constants/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type SubscriptionProps = {};

const Subscription = ({ code, name, description, color, price }: any) => {
  return (
    <View key={code} className="flex-row items-center rounded bg-gray-200">
      <View
        className="h-16 w-16 items-center justify-center rounded"
        style={{ backgroundColor: color || Color.blue.primary }}
      >
        <View className="rounded-full bg-white px-2 py-0.5">
          <Text
            className="text-center"
            style={{ color: color || Color.blue.primary }}
          >
            {code}
          </Text>
        </View>
      </View>
      <View className="ml-2 flex-1 flex-row items-center justify-center">
        <View className="mr-2 flex-1">
          <Text className="text-black-primary text-base font-semibold">
            {name}
          </Text>
          <Text className="text-black-secondary text-sm">
            Next: 30 December
          </Text>
        </View>
        <Text className="text-black-primary mr-2 flex-[0.5] text-base font-bold">
          ${price}
          <Text className="text-sm font-normal">/mo</Text>
        </Text>
        <TouchableOpacity className="p-2">
          <MaterialCommunityIcons name={"dots-vertical"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Subscription;
