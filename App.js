import React from "react";
import { View, Text, Button } from "react-native";
import { Vibration } from "react-native"; // Correct import statement
import { Audio } from "expo-av";

export default function App() {
  const vibrate = () => {
    // 1초 동안 진동
    Vibration.vibrate(1000);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Expo 진동 예제</Text>
      <Button title="진동 시작" onPress={vibrate} />
    </View>
  );
}
