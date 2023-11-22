// 시작 전 App.js 코드
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import StateWithFuctionalComponent from "./StateWithFuctionalComponent";
import UseEffectWithFunctionalComponent from "./UseEffectWithFunctionalComponent";

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View style={styles.container}>
      {/* <StateWithFuctionalComponent /> */}
      {isTrue ? <UseEffectWithFunctionalComponent /> : null}
      <Button title="toggle" onPress={() => setIsTrue(!isTrue)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
