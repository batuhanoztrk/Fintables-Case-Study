import SubscriptionList from "@components/SubscriptionList";
import { Status } from "@models/Subscription";
import { getSubscriptions } from "@services/subscriptions";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

const Subscriptions = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: getSubscriptions,
  });

  const activeSubscriptions = useMemo(() => {
    return _.filter(data, { status: Status.Active });
  }, [data]);

  const expiredSubscriptions = useMemo(() => {
    return _.filter(data, { status: Status.Expired });
  }, [data]);

  return (
    <ScrollView className="flex-1 bg-white-light">
      <View className="gap-y-4 p-4">
        <View className="gap-y-1">
          <Text className="text-black-primary text-3xl">
            {t("subscriptions.welcome", {
              name: "John Doe",
            })}
          </Text>
          <Text className="text-black-hint text-sm font-bold">
            {t("subscriptions.content")}
          </Text>
        </View>

        {isLoading || activeSubscriptions.length > 0 ? (
          <SubscriptionList
            isLoading={isLoading}
            data={activeSubscriptions}
            title={t("subscriptions.activeSubscriptions")}
          />
        ) : null}

        {isLoading || expiredSubscriptions.length > 0 ? (
          <SubscriptionList
            isLoading={isLoading}
            data={expiredSubscriptions}
            title={t("subscriptions.expiredSubscriptions")}
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Subscriptions;
