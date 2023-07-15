import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        value={name}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newvalue) => setName(newvalue)}
      />
      <Text>My Name is :{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
