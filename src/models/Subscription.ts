type Subscription = {
  product: string;
  platform: Platform;
  status: Status;
  starts_at: Date;
  expires_at: Date;
  canceled_at: Date | null;
  period: Period;
};

enum Platform {
  iOS = "ios",
  Android = "android",
  Web = "web",
}

enum Status {
  Active = "active",
  Expired = "expired",
}

enum Period {
  Monthly = "monthly",
  Yearly = "yearly",
}

export type SubscriptionResponse = {
  subscriptions: Subscription[];
};
