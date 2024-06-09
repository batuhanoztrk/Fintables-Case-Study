import Color from "@constants/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Product } from "@models/Product";
import { Status, Subscription } from "@models/Subscription";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/tr";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

type ProductProps = {
  product: Product;
  subscription: Subscription;
  isLoading?: boolean;
};

const ProductItem = ({
  product: { code, name, color, price },
  subscription: { expires_at, canceled_at, period, status },
  isLoading,
}: ProductProps) => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const periodString = t(`period.${period}`);

  const formattedExpiresAt = dayjs(expires_at)
    .locale(currentLanguage)
    .format("DD MMM YY");

  const description =
    status == Status.Active
      ? canceled_at
        ? t("subscriptions.willExpire", {
            date: formattedExpiresAt,
          })
        : t("subscriptions.nextBilling", {
            date: formattedExpiresAt,
          })
      : t("subscriptions.expired", {
          date: formattedExpiresAt,
        });

  return (
    <Skeleton radius={4} colorMode="light" show={isLoading}>
      <View className="flex-row items-center rounded bg-gray-200">
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
            <Text className="text-black-secondary text-sm">{description}</Text>
          </View>
          <Text className="text-black-primary mr-2 flex-[0.5] text-base font-bold">
            ${price}
            <Text className="text-sm font-normal">/{periodString}</Text>
          </Text>
          <TouchableOpacity className="p-2">
            <MaterialCommunityIcons name={"dots-vertical"} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </Skeleton>
  );
};

export default ProductItem;
