import RootStackNavigator from "@app/navigation";
import NavigationService from "@navigation/NavigationService";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer ref={(e) => NavigationService.setNavigator(e)}>
          <RootStackNavigator />
        </NavigationContainer>
      </QueryClientProvider>
      <StatusBar style="dark" />
    </>
  );
}
