import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const FormData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Form Data</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleSubmit} />
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default FormData;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
