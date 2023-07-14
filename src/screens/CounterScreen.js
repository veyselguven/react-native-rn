import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "decrease_counter":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "increase_counter":
      return {
        ...state,
        counter: state.counter + 1,
      };
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  // const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    dispatch({ type: "increase_counter" });
  };
  const handleDecrease = () => {
    dispatch({ type: "decrease_counter" });
  };
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          handleIncrease();
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          handleDecrease();
        }}
      />
      <Text style={styles.textStyle}>Current Count; {state.counter}</Text>
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
