import { Screens } from "@constants/Screens";
import { RootStackParamList } from "@navigation/types";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "@screens/splash";
import Subscriptions from "src/screens/profile/subscriptions";

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.Splash}>
      <RootStack.Screen name={Screens.Splash} component={Splash} />
      <RootStack.Screen
        name={Screens.Subscriptions}
        component={Subscriptions}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
