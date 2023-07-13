import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ComponentsScreen = () => {
  const name = "Veysel";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native !</Text>
      <Text style={styles.subHeaderStlye}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    // backgroundColor: "red",
  },
  subHeaderStlye: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
