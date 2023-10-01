import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return <Text>{props.title}</Text>;
};
const Profile = (props) => {
  return <Text>{props.name}</Text>;
};
const FreindList = () => {
  return (
    <View>
      <Profile name="민후" />
      <Profile name="지연" />
      <Profile name="현서" />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <FreindList />
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
