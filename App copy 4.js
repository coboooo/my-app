import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChildComponent from "./ChildComponent";

const Test = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChildComponent text="안녕하세요, 리액트 네이티브!" />
      <Test text="안녕하세요, 리액트 네이티브!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
