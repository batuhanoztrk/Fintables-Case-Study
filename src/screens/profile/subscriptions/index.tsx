import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

const Subscriptions = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-1">
      <Text className="text-blue-500">{t("subscriptions")}</Text>
    </View>
  );
};

export default Subscriptions;
