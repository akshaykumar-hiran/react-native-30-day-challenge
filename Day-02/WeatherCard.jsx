import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ location, temperature, condition }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.temp}>{temperature}°C</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#a2d5f2',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  location: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 30,
    color: '#333',
  },
  condition: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
