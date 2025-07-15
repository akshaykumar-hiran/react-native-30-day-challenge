import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(prev => prev + 1);
  const handleDecrement = () => setCounter(prev => prev - 1);

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>{counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={handleIncrement} />
        <Button title="Decrement" onPress={handleDecrement} />
      </View>
    </View>
  );
};

export default CounterApp;

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 32,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
