import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    height: 200,
    borderColor: "black",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
    // same things above
    // position: "absolute",
    // bottom: 0,
    // top: 0,
    // left: 0,
    // right: 0,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    left: 10,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default BoxScreen;
