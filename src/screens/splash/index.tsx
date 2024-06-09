import { Screens } from "@constants/Screens";
import { SplashScreenNavigationProp } from "@navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View } from "react-native";

const Splash = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: Screens.Payments }],
    });
  }, []);

  return <View style={{ flex: 1 }}></View>;
};

export default Splash;
