import { Screens } from "@constants/Screens";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  [Screens.Splash]: undefined;
  [Screens.Payments]: undefined;
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Splash
>;

export type PaymentsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.Payments
>;
