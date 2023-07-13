import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "FRIEND1" },
    { name: "FRIEND2" },
    { name: "FRIEND3" },
    { name: "FRIEND4" },
    { name: "FRIEND5" },
    { name: "FRIEND6" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // console.log(element);
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 90,
  },
});

export default ListScreen;
