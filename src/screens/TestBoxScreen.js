import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TestBoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    top: 50,
    // margin: 50,
    // alignSelf: "flex-end",
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});
export default TestBoxScreen;
