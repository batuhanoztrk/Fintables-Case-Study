import { Screens } from "@constants/Screens";
import i18n from "@language/i18n";
import { RootStackParamList } from "@navigation/types";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "@screens/splash";
import Subscriptions from "src/screens/profile/subscriptions";

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.Splash}>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name={Screens.Splash} component={Splash} />
      </RootStack.Group>

      <RootStack.Screen
        name={Screens.Subscriptions}
        component={Subscriptions}
        options={{
          headerTitle: i18n.t("subscriptions.title"),
          headerTitleAlign: "center",
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
