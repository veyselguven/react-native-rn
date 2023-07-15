import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

const TextExercise = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Paswsword:</Text>
      <TextInput
        value={password}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newvalue) => setPassword(newvalue)}
      />
      {password.length < 5 && (
        <Text>password must be longer than 5 character</Text>
      )}
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
export default TextExercise;
