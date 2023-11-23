// MyButton.js

import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MyBox from "./MyBox";

const MyButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <React.Fragment>
      <TouchableOpacity
        style={[styles.button, { opacity: isPressed ? 0.5 : 1 }]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Press Me!</Text>
      </TouchableOpacity>
      <MyBox isVisible={isPressed} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default MyButton;
