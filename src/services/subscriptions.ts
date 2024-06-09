import {
  Period,
  Platform,
  Status,
  Subscription,
  SubscriptionResponse,
} from "@models/Subscription";
import _ from "lodash";

const emptySubscription: SubscriptionResponse = {
  subscriptions: [],
};

const oneExpiredSubscription: SubscriptionResponse = {
  subscriptions: [
    {
      product: "lite",
      platform: Platform.Android,
      status: Status.Expired,
      starts_at: "2024-05-01T12:00:00Z",
      expires_at: "2024-06-01T12:00:00Z",
      canceled_at: "2024-05-02T12:00:00Z",
      period: Period.Monthly,
    },
  ],
};

const oneActiveOneExpiredSubscription: SubscriptionResponse = {
  subscriptions: [
    {
      product: "pro",
      platform: Platform.Android,
      status: Status.Active,
      starts_at: "2024-06-01T12:00:00Z",
      expires_at: "2024-07-01T12:00:00Z",
      canceled_at: "2024-06-03T12:00:00Z",
      period: Period.Monthly,
    },
    {
      product: "pd2",
      platform: Platform.Web,
      status: Status.Expired,
      starts_at: "2024-05-01T12:00:00Z",
      expires_at: "2024-06-01T12:00:00Z",
      period: Period.Monthly,
    },
  ],
};

const threeActiveSubscriptions: SubscriptionResponse = {
  subscriptions: [
    {
      product: "pro",
      platform: Platform.Android,
      status: Status.Active,
      starts_at: "2024-06-01T12:00:00Z",
      expires_at: "2025-06-01T12:00:00Z",
      canceled_at: null,
      period: Period.Yearly,
    },
    {
      product: "pd2",
      platform: Platform.Web,
      status: Status.Active,
      starts_at: "2024-06-01T12:00:00Z",
      expires_at: "2024-07-01T12:00:00Z",
      canceled_at: null,
      period: Period.Monthly,
    },
    {
      product: "pite",
      platform: Platform.Web,
      status: Status.Active,
      starts_at: "2024-06-01T12:00:00Z",
      expires_at: "2024-07-01T12:00:00Z",
      canceled_at: null,
      period: Period.Monthly,
    },
  ],
};

const data = [
  emptySubscription,
  oneExpiredSubscription,
  oneActiveOneExpiredSubscription,
  threeActiveSubscriptions,
];

export const getSubscriptions = async (): Promise<Subscription[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(_.sample(data)!.subscriptions);
    }, 1000);
  });
};
