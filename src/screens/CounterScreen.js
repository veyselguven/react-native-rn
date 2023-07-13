import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter((prev) => prev + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter((prev) => prev - 1);
        }}
      />
      <Text style={styles.textStyle}>Current Count; {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    textAlign: "center",
  },
});

export default CounterScreen;
