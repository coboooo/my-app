import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { friendProfiles, myProfile } from "./src/data";
import Division from "./src/Division";
import FriendList from "./src/FriendList";
import FriendSection from "./src/FriendSection";
import Header from "./src/Header";
import Margin from "./src/Margin";
import Profile from "./src/Profile";
import MyButton from "./src/MyButton";
import MyBox from "./src/MyBox";
import WebView from "react-native-webview";
import { Vibration } from "expo";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  return (
    <View style={styles.container}>
      <MyButton />
      <MyBox />
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <FriendList data={friendProfiles} isOpened={isOpened} />
      <WebView
        source={{ uri: "https://www.google.com" }} // 여기에 자신의 웹사이트 URL을 입력하세요
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    paddingHorizontal: 15,
  },
  webview: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: "black",
  },
});
