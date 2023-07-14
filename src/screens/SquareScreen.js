import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

const C0LOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  //   console.log(red);
  const setColor = (color, change) => {
    // color=== "red","green",blue
    // change=== +15.-15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", C0LOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * C0LOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", C0LOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * C0LOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", C0LOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * C0LOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
