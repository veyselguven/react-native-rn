import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const ColorCounter = ({ color, handleDecrease, handleIncrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => handleIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => handleDecrease()} />
    </View>
  );
};

export default ColorCounter;
