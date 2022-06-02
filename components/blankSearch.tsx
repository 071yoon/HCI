import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

export default function OnionSearch({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={{ top: 30 }}>찾고자 하는 품목이 없습니다</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
