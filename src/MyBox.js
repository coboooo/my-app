// MyBox.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyBox = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>This is MyBox!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  boxText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default MyBox;
