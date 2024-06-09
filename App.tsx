import RootStackNavigator from "@app/navigation";
import NavigationService from "@navigation/NavigationService";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

export default function App() {
  return (
    <>
      <NavigationContainer ref={(e) => NavigationService.setNavigator(e)}>
        <RootStackNavigator />
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}
