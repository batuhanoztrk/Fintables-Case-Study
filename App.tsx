import RootStackNavigator from "@app/navigation";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import "@language/i18n";
import NavigationService from "@navigation/NavigationService";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import "react-native-reanimated";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ActionSheetProvider>
          <NavigationContainer ref={(e) => NavigationService.setNavigator(e)}>
            <RootStackNavigator />
          </NavigationContainer>
        </ActionSheetProvider>
      </QueryClientProvider>
      <StatusBar style="dark" />
    </>
  );
}
