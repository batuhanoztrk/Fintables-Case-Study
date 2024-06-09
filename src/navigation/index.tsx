import { Screens } from "@constants/Screens";
import { RootStackParamList } from "@navigation/types";
import { createStackNavigator } from "@react-navigation/stack";
import Payments from "@screens/profile/payments";
import Splash from "@screens/splash";

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.Splash}>
      <RootStack.Screen name={Screens.Splash} component={Splash} />
      <RootStack.Screen name={Screens.Payments} component={Payments} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
