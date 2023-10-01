import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return <Text>Header</Text>;
};

const MyProfile = () => {
  return (
    <Profile
      name="영은"
      uri="https://as2.ftcdn.net/v2/jpg/00/69/42/49/1000_F_69424905_vxTpRGAcVKni9157VpKAOG6MpTX30etl.jpg"
    />
  );
};

const FriendList = () => {
  return (
    <View>
      <Profile
        name="시은"
        uri="https://as2.ftcdn.net/v2/jpg/00/69/42/49/1000_F_69424905_vxTpRGAcVKni9157VpKAOG6MpTX30etl.jpg"
      />
      <Profile
        name="동은"
        uri="https://as2.ftcdn.net/v2/jpg/00/69/42/49/1000_F_69424905_vxTpRGAcVKni9157VpKAOG6MpTX30etl.jpg"
      />
      <Profile
        name="라은"
        uri="https://as2.ftcdn.net/v2/jpg/00/69/42/49/1000_F_69424905_vxTpRGAcVKni9157VpKAOG6MpTX30etl.jpg"
      />{" "}
    </View>
  );
};

const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: props.uri,
        }}
        style={{
          width: 30,
          height: 30,
        }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <MyProfile />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff345",
    alignItems: "center",
    justifyContent: "center",
  },
});
