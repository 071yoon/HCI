import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

export default function TabOneScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topNav}>
        <Image
          style={styles.bar}
          source={require("../assets/images/threeBar.png")}
        />
        <Image
          style={styles.alarm}
          source={require("../assets/images/Alarm.png")}
        />
      </View>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.boxContainer}
          onPress={() => navigation.navigate("TabOneDetail1")}
        >
          <View style={styles.count}>
            <Text style={styles.countText}>남은 인원 :</Text>
              <Text style={styles.countNum}>
              1
              </Text>
          </View>
          <Image
            style={styles.boxImage}
            source={require("../assets/images/onion.jpg")}
          />
          <View
            style={styles.boxSeparator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.mainText}>[양파] 필요하신 분!!</Text>
          <Text style={styles.subText}>모집 인원 : 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boxContainer}
          onPress={() => navigation.navigate("TabOneDetail2")}
        >
          <View style={styles.count}>
            <Text style={styles.countText}>남은 인원 :</Text>
            <Text style={styles.countNum}>
              1
              </Text>
          </View>
          <Image
            style={styles.boxImage}
            source={require("../assets/images/hot.png")}
          />
          <View
            style={styles.boxSeparator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.mainText}>[엽떡] 같이 먹을 분</Text>
          <Text style={styles.subText}>모집 인원 : 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boxContainer}
          onPress={() => navigation.navigate("TabOneDetail3")}
        >
          <View style={styles.count}>
            <Text style={styles.countText}>남은 인원 :</Text>
            <Text style={styles.countNum}>
              2
              </Text>
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

        <TouchableOpacity
          style={styles.boxContainer}
          onPress={() => navigation.navigate("TabOneDetail4")}
        >
          <View style={styles.count}>
            <Text style={styles.countText}>남은 인원 :</Text>
            <Text style={styles.countNum}>
              2
              </Text>
          </View>
          <Image
            style={styles.boxImage}
            source={require("../assets/images/apple.jpg")}
          />
          <View
            style={styles.boxSeparator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.mainText}>[사과] 구매하실 분</Text>
          <Text style={styles.subText}>모집 인원 : 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boxContainer}
          onPress={() => navigation.navigate("TabOneDetail5")}
        >
          <View style={styles.count}>
            <Text style={styles.countText}>남은 인원 :</Text>
            <Text style={styles.countNum}>
              2
              </Text>
          </View>
          <Image
            style={styles.boxImage}
            source={require("../assets/images/pepper.jpg")}
          />
          <View
            style={styles.boxSeparator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.mainText}>[고춧가루] 나눠요</Text>
          <Text style={styles.subText}>모집 인원 : 4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boxContainer}
          onPress={() => navigation.navigate("TabOneDetail6")}
        >
          <View style={styles.count}>
            <Text style={styles.countText}>남은 인원 :</Text>
            <Text style={styles.countNum}>
              3
              </Text>
          </View>
          <Image
            style={styles.boxImage}
            source={require("../assets/images/pa.jpg")}
          />
          <View
            style={styles.boxSeparator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.mainText}>[대파] 대량 구매해요</Text>
          <Text style={styles.subText}>모집 인원 : 5</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontWeight: "bold",
    fontSize:16
  },
  subText: {
    fontSize: 14,
    position: "absolute",
    color: "gray",
    marginTop: 174,
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
    marginBottom: 6,
    marginLeft: 30,
  },
  countNum: {
    fontSize: 24,
    fontWeight:'bold',
    color:'#2c5f2d',
    paddingHorizontal: 4,
    marginBottom:4
  },
  boxContainer: {
    // outline: none;
    color: "#0070d2",
    borderColor: "#dddbda",
    position: "relative",
    marginTop: 4,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    width: 150,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  count: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#97bc62",
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
    top: 30,
    flex: 1,
    marginBottom: 30,
    backgroundColor: "white",
  },
  topNav: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    height: 60,
    justifyContent: "space-between",
    alignContent: "center",
  },
  bar: {
    marginLeft: 20,
    marginTop: 15,
  },
  alarm: {
    marginTop: 10,
    marginRight: 20,
  },
  separator: {
    marginVertical: 50,
    height: 1,
    width: "100%",
  },
});
