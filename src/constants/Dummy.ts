import { Period, Platform, Status, Subscription } from "@models/Subscription";

const dummySubscription: Subscription = {
  product: "pro",
  platform: Platform.Android,
  status: Status.Active,
  starts_at: "2024-06-01T12:00:00Z",
  expires_at: "2025-06-01T12:00:00Z",
  canceled_at: null,
  period: Period.Yearly,
};

export { dummySubscription };
