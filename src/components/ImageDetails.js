import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ImageDetails = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score -{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
