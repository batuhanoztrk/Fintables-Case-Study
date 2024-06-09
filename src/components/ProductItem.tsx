import Color from "@constants/Color";
import { useActionSheet } from "@expo/react-native-action-sheet";
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

type ProductItemProps = {
  product: Product;
  subscription: Subscription;
  isLoading?: boolean;
};

const ProductItem = ({
  product: { code, name, color, price },
  subscription: { expires_at, canceled_at, period, status },
  isLoading,
}: ProductItemProps) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const periodString = t(`period.${period}`);

  const formattedExpiresAt = dayjs(expires_at)
    .locale(language)
    .format("DD MMM YY");

  const descriptionKey =
    status == Status.Active
      ? canceled_at
        ? "subscriptions.willExpire"
        : "subscriptions.nextBilling"
      : "subscriptions.expired";

  const description = t(descriptionKey, {
    date: formattedExpiresAt,
  });

  const onDotsPress = () => {
    const options: string[] = [
      t("subscriptions.giveFeedback"),
      t("subscriptions.giveUp"),
    ];
    let destructiveButtonIndex = -1;

    if (status === Status.Active && !canceled_at) {
      options.unshift(t("subscriptions.cancel"));
      destructiveButtonIndex = 0;
    } else if (status === Status.Active && canceled_at) {
      options.unshift(t("subscriptions.reactivate"));
    } else {
      options.unshift(t("subscriptions.renew"));
    }

    const cancelButtonIndex = options.length - 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        showSeparators: true,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            if (status === Status.Active && !canceled_at) {
              // Cancel
            } else if (status === Status.Active && canceled_at) {
              // Reactivate
            } else {
              // Renew
            }
            break;
          case 1:
            // Give Feedback
            break;
          case 2:
            // Give Up
            break;
        }
      },
    );
  };

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
          <Text className="text-black-primary mr-2 flex-[0.4] text-base font-bold">
            ${price}
            <Text className="text-sm font-normal">/{periodString}</Text>
          </Text>
          <TouchableOpacity onPress={onDotsPress} className="p-2">
            <MaterialCommunityIcons name={"dots-vertical"} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </Skeleton>
  );
};

export default ProductItem;
