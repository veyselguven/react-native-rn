import { View, Text, StyleSheet } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const C0LOR_INCREMENT = 15;
const reducer = (state, action) => {
  // state ==={red:number,green:number,blue:number}
  // action ==={colorToChange :"red" || "green" || "blue", amount:15 || -15}
  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return {
        ...state,
        red: state.red + action.amount,
      };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : {
            ...state,
            green: state.green + action.amount,
          };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.amount,
          };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  //   console.log(red);

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: C0LOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * C0LOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: C0LOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * C0LOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: C0LOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * C0LOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
