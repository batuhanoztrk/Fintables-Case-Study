import { Screens } from "@constants/Screens";
import { SplashScreenNavigationProp } from "@navigation/types";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

const Splash = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    SplashScreen.hideAsync()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: Screens.Subscriptions }],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <View style={{ flex: 1 }}></View>;
};

export default Splash;
