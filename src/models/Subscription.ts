export type Subscription = {
  product: string;
  platform: Platform;
  status: Status;
  starts_at: string;
  expires_at: string;
  canceled_at?: string | null;
  period: Period;
};

export enum Platform {
  iOS = "ios",
  Android = "android",
  Web = "web",
}

export enum Status {
  Active = "active",
  Expired = "expired",
}

export enum Period {
  Monthly = "monthly",
  Yearly = "yearly",
}

export type SubscriptionResponse = {
  subscriptions: Subscription[];
};
