import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { shouldUseActivityState } from "react-native-screens";
import { TouchableOpacity } from "react-native";
import itemDetail from "./itemDetail";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Image style={styles.bar} source={require("../assets/images/threeBar.png")} />
        <Image style={styles.alarm} source={require("../assets/images/Alarm.png")} />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <View style={styles.profile}>
        <Image style={styles.profileImg} source={require("../assets/images/onionProfile.png")} />
        <View style={styles.profileText}>
          <Text style={styles.profileTitle}>양파좋아</Text>
          <Text style={styles.profileSubTitle}>서울 특별시 광진구</Text>
          <TouchableOpacity onPress={() => {}} style={styles.profileEdit}>
            <Text style={styles.profileEditText}>프로필 설정</Text>
            <Image style={styles.profileEditImage} source={require("../assets/images/brightness_5.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={styles.separator2}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.menu}>
        <View style={styles.menuText}>
          <Text style={styles.middleFont}>내가 등록한 상품</Text>
          <Text>더보기</Text>
        </View>
        <View style={styles.menuGroup}>
          <View style={[styles.menuTab, styles.menuTabRightLine]}>
            <Text>전체</Text>
            <Text style={[styles.menuTabNum, styles.fontOrange]}>7</Text>
          </View>
          <View style={styles.menuTab}>
            <Text>진행중</Text>
            <Text style={styles.menuTabNum}>3</Text>
          </View>
          <View style={styles.menuTab}>
            <Text>완료</Text>
            <Text style={styles.menuTabNum}>2</Text>
          </View>
          <View style={styles.menuTab}>
            <Text>실패</Text>
            <Text style={styles.menuTabNum}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <View style={styles.menuText}>
          <Text style={styles.middleFont}>내가 참여한 상품</Text>
          <Text>더보기</Text>
        </View>
        <View style={styles.menuGroup}>
          <View style={[styles.menuTab, styles.menuTabRightLine]}>
            <Text>전체</Text>
            <Text style={[styles.menuTabNum, styles.fontGreen]}>5</Text>
          </View>
          <View style={styles.menuTab}>
            <Text>진행중</Text>
            <Text style={styles.menuTabNum}>0</Text>
          </View>
          <View style={styles.menuTab}>
            <Text>완료</Text>
            <Text style={styles.menuTabNum}>4</Text>
          </View>
          <View style={styles.menuTab}>
            <Text>실패</Text>
            <Text style={styles.menuTabNum}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fontOrange: {
    color: "rgb(244,104,0)",
  },
  fontGreen: {
    color: "#86CF3C",
  },
  middleFont: {
    fontSize: 14,
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  menuText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 2,
  },
  menuGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
  },
  menuTab: {
    display: "flex",
    marginHorizontal: 10,
    marginTop: 8,
    backgroundColor: "#F3F3F3",
    height: 50,
    width: 88,
    alignItems: "center",
    marginBottom: 10,
  },
  menuTabRightLine: {
    borderRightWidth: 1.5,
    borderRightColor: "#DEDEDE",
    borderStyle: "solid",
  },
  menuTabNum: {
    marginTop: 4,
    fontWeight: "bold",
  },
  profile: {
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    width: 86,
    height: 86,
    marginTop: 10,
  },
  profileText: {
    width: 230,
    marginLeft: 20,
  },
  profileEdit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    width: "100%",
    height: 24,
    borderRadius: 5,
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#afafaf",
    borderWidth: 1.2,
  },
  profileEditText: {
    fontWeight: "bold",
    color: "#afafaf",
  },
  profileEditImage: {
    marginLeft: 4,
  },
  profileSubTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 4,
    color: "#afafaf",
  },
  profileTitle: {
    width: "100%",
    fontWeight: "bold",
    marginTop: 8,
    fontSize: 18,
  },
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
  },
  topNav: {
    marginTop: 50,
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
  separator2: {
    marginVertical: 20,
    height: 1,
    width: "100%",
  },
});
