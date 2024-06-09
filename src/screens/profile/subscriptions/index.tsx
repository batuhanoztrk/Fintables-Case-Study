import Subscription from "@components/Subscription";
import { subscriptions } from "@constants/Subscriptions";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Text, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

const user = {
  name: "John Doe",
  email: "john@doe.com",
};

const Subscriptions = () => {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-white-light">
      <View className="gap-y-4 p-4">
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
            Aktif Abonelikler
          </Text>
          <View>
            <FlashList
              horizontal={true}
              pagingEnabled={true}
              data={subscriptions}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    width: Dimensions.get("window").width - 32,
                  }}
                  className="flex-1 flex-row"
                >
                  <View className="flex-[0.5] items-center justify-center gap-y-1">
                    <Text className="text-black-primary text-center font-semibold">
                      Başlangıç Tarihi
                    </Text>
                    <Text className="text-black-secondary text-center">
                      03.03.2021
                    </Text>
                  </View>
                  <Subscription {...item} />
                  <View className="flex-[0.5] items-center justify-center gap-y-1">
                    <Text className="text-black-primary text-center font-semibold">
                      Bitiş Tarihi
                    </Text>
                    <Text className="text-black-secondary text-center">
                      03.03.2021
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>

        <View className="gap-y-4">
          <Text className="text-black-primary text-xl font-bold">
            Geçmiş Abonelikler
          </Text>
          <View>
            <FlashList
              horizontal={true}
              data={subscriptions}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-4" />}
              renderItem={({ item, index }) => <Subscription {...item} />}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Subscriptions;
