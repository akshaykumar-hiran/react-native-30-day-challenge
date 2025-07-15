import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import WeatherCard from "./WeatherCard"

function WeatherData() {
  const weatherProps = {
    location: "Mumbai",
    temperature: 32,
    condition: "Sunny",
  };

  return (
    <View style={styles.container}>
      {/* Passing props without spread operator */}
      <WeatherCard location="New York" temperature={25} condition="Cloudy" />

      {/* Passing props using spread operator */}
      <WeatherCard {...weatherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f7ff",
  },
});

export default WeatherData;
