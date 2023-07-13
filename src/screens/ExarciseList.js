import { View, Text, FlatList } from "react-native";
import React from "react";

export default function ExarciseList() {
  const friends = [
    { name: "Friend 1", age: 12 },
    { name: "Friend 2", age: 13 },
    { name: "Friend 3", age: 14 },
    { name: "Friend 4", age: 14 },
    { name: "Friend 5", age: 15 },
    { name: "Friend 6", age: 16 },
    { name: "Friend 7", age: 17 },
    { name: "Friend 8", age: 18 },
    { name: "Friend 9", age: 19 },
    { name: "Friend 10", age: 21 },
  ];
  const Rendered = ({ name, age }) => {
    return (
      <Text>
        {name}-{age}
      </Text>
    );
  };
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Rendered name={item.name} age={item.age} />;
      }}
    />
  );
}
