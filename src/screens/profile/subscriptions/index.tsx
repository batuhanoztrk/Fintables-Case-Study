import Subscription from "@components/Subscription";
import { subscriptions } from "@constants/Subscriptions";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

const user = {
  name: "John Doe",
  email: "john@doe.com",
};

const Subscriptions = () => {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-white-light">
      <View className="gap-y-2 p-4">
        <View className="gap-y-1">
          <Text className="text-black-primary text-3xl">
            {t("subscriptions.welcome", {
              name: user.name,
            })}
          </Text>
          <Text className="text-black-hint text-sm font-bold">
            {t("subscriptions.content")}
          </Text>
        </View>

        <View className="gap-y-4">
          <Text className="text-black-primary text-xl font-bold">
            Abonelikler
          </Text>
          <View>
            <FlashList
              estimatedItemSize={64}
              data={[...subscriptions, ...subscriptions, ...subscriptions]}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="h-4" />}
              renderItem={({ item, index }) => <Subscription {...item} />}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Subscriptions;
