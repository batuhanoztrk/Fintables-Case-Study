import ProductItem from "@components/ProductItem";
import { dummySubscription } from "@constants/Dummy";
import { products } from "@constants/Products";
import { Subscription } from "@models/Subscription";
import { FlashList } from "@shopify/flash-list";
import _ from "lodash";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { Text, View, ViewStyle } from "react-native";

type SubscriptionListProps = {
  isLoading: boolean;
  data: Subscription[];
  title: string;
  style?: ViewStyle;
};

const SubscriptionList = ({
  isLoading,
  data,
  title,
  style,
}: SubscriptionListProps) => {
  return (
    <View style={style} className="gap-y-4">
      <View>
        <Skeleton colorMode="light" show={isLoading}>
          <Text className="text-black-primary text-xl font-bold">{title}</Text>
        </Skeleton>
      </View>
      <View>
        <FlashList
          estimatedItemSize={64}
          data={isLoading ? new Array(3).fill(dummySubscription) : data}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={({ item, index }) => {
            const product = _.find(products, { code: item.product });

            if (!product) {
              return null;
            }

            return (
              <ProductItem
                key={item.product}
                subscription={item}
                product={product}
                isLoading={isLoading}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default SubscriptionList;
