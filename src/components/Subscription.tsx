import Color from "@constants/Color";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type SubscriptionProps = {};

const Subscription = ({ code, name, description, color, price }: any) => {
  return (
    <View className="w-48 flex-1 gap-y-4" key={code}>
      <View
        className={`flex-1 overflow-hidden rounded-md border border-transparent`}
        style={{
          backgroundColor: color || Color.blue.primary,
        }}
      >
        <View className="flex-1 items-center gap-y-2 p-2">
          <Text className="text-center text-xl font-semibold text-white">
            {name}
          </Text>
          <Text className="text-sm text-white">{description}</Text>
        </View>
        <View
          style={{
            marginTop: 80,
            backgroundColor: Color.white.DEFAULT,
            height: 100,
            borderRadius: 35,
            left: 50,
            transform: [{ rotate: "55deg" }],
          }}
        >
          <Text
            className="text-black-primary text-center font-semibold"
            style={{
              marginTop: 40,
              marginRight: 50,
              transform: [{ rotate: "-55deg" }],
            }}
          >
            {price}$
          </Text>
        </View>
      </View>
      <View className="px-4">
        <TouchableOpacity
          className="items-center justify-center rounded-md p-2.5"
          style={{
            backgroundColor: color || Color.blue.primary,
          }}
        >
          <Text className="text-center font-medium text-white">Satın Al</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Subscription;
