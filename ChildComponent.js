import React from "react";
import { View, Text } from "react-native";

const ChildComponent = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default ChildComponent;
