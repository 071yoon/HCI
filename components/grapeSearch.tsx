import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

export default function OnionSearch({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.boxContainer}
          onPress={() => navigation.navigate("TabOneDetail3")}
        >
          <View style={styles.count}>
            <Text style={styles.countText}>남은 인원 : 1</Text>
          </View>
          <Image
            style={styles.boxImage}
            source={require("../assets/images/grape.jpg")}
          />
          <View
            style={styles.boxSeparator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.mainText}>[포도] 먹고 싶어요</Text>
          <Text style={styles.subText}>모집 인원 : 3</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    position: "absolute",
    color: "gray",
    marginTop: 175,
  },
  boxSeparator: {
    marginVertical: 7,
    height: 1,
    width: "80%",
  },
  boxImage: {
    width: 150,
    height: 100,
  },
  countText: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
  },
  boxContainer: {
    position: "relative",
    marginTop: 4,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    width: 150,
    height: 200,
    backgroundColor: "white",
    borderRadius: 30,
    overflow: "hidden",
    borderStyle: "solid",
    borderColor: "gray",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  count: {
    backgroundColor: "#86cf3c",
    width: 150,
    height: 35,
    marginTop: 0,
  },
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
  topNav: {
    height: 60,
    position: "relative",
    alignContent: "center",
  },
  bar: {
    position: "absolute",
    marginLeft: 20,
    marginTop: 15,
  },
  alarm: {
    position: "absolute",
    marginLeft: 340,
    marginTop: 10,
  },
  separator: {
    marginVertical: 50,
    height: 1,
    width: "100%",
  },
});
