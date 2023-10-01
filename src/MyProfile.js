import { Image, Text, View } from "react-native";
import Margin from "./Margin";

export default (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: 50, height: 50, borderRadius: 12 }}
      />
      <View style={{}}>
        <Text>{props.name}</Text>
        <Margin height={3} />
        <Text>{props.introduction}</Text>
      </View>
    </View>
  );
};
