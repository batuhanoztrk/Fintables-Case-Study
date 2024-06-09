import { Screens } from "@constants/Screens";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  [Screens.Splash]: undefined;
  [Screens.Subscriptions]: undefined;
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Splash
>;

export type SubscriptionsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Subscriptions
>;
