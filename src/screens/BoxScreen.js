import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child 1</Text>
      <Text style={styles.textStyle}>Child 2</Text>
      <Text style={styles.textStyle}>Child 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    height: 200,
    borderColor: "black",
    // flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default BoxScreen;
