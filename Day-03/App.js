import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CounterApp from "./components/CounterApp";
import FormData from "./components/FormData";
import WeatherData from "./components/WeatherData";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   {/* <CounterApp /> */}
    //   {/* <FormData /> */}
    //   {/* <WeatherData /> */}

    // </View>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
