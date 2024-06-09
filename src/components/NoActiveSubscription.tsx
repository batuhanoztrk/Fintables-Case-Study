import LottieView from "lottie-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View, ViewProps } from "react-native";

type NoActiveSubscriptionProps = ViewProps & {
  onGoToPremium: () => void;
};

const NoActiveSubscription = (props: NoActiveSubscriptionProps) => {
  const { t } = useTranslation();

  return (
    <View className="items-center" {...props}>
      <LottieView
        autoPlay
        style={{
          width: 120,
          height: 120,
        }}
        source={require("@assets/lottie/subscription.json")}
      />
      <Text className="text-black-primary text-center text-xl">
        {t("subscriptions.noActiveSubscriptions")}
      </Text>

      <Text className="text-black-secondary mt-1 text-center text-sm font-bold">
        {t("subscriptions.noActiveSubscriptionsContent")}
      </Text>

      <TouchableOpacity
        onPress={props.onGoToPremium}
        className="mt-6 h-10 w-full"
      >
        <LottieView
          autoPlay
          resizeMode="contain"
          loop={false}
          style={{
            width: "100%",
            height: "100%",
          }}
          source={require("@assets/lottie/premium.json")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NoActiveSubscription;
