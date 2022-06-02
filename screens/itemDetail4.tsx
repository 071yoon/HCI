import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "../components/Themed";
import { Image } from "react-native";

export default function ItemDetails({ navigation }: any) {
  const [toggle, setToggle] = React.useState(false);
  function toggleState() {
    setToggle(!toggle);
  }
  const [cntToggle, setcntToggle] = React.useState(false);
  function cntToggleState() {
    setcntToggle(!cntToggle);
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/images/apple.jpg")}
      />
      <View style={styles.profile}>
        <TouchableOpacity onPress={() => navigation.navigate("OnionProfile")}>
          <Image
            style={styles.profileImg}
            source={require("../assets/images/konkuk.jpg")}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>건국맨</Text>
        <Text style={styles.profileTime}>3시간 전</Text>
        <Text style={styles.profileLocation}>서울특별시 광진구 화양동 131</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <View style={styles.chatBox}>
        <Text style={styles.mainArticle}>사과 대량구매 하실 분 찾습니다.</Text>
        <Text style={styles.mainArticle}>
          사과 10개 묶음으로 엄청 싸게 팔더라고요. 원하시는 개수 말씀해주세요!
        </Text>
        <Text style={styles.mainArticle}>모집 기한 일주일동안 받을게요!</Text>
      </View>
      <TouchableOpacity onPress={toggleState} style={{zIndex: 10, top: 150, width: 50, height: 50}} />
      <View style={styles.down}>
        {toggle ? (
          <Image
            style={styles.heart}
            source={require("../assets/images/heart_fill.png")}
          />
        ) : (
          <Image
            style={styles.heart}
            source={require("../assets/images/Heart.png")}
          />
        )}
        <Text style={styles.together}>같이 구매하시겠어요?</Text>
        {cntToggle ? <TouchableOpacity style={styles.button2} onPress={cntToggleState}>
          {cntToggle ? <Text style={styles.ppl}>참여완료</Text> : <Text style={styles.ppl}>참여하기</Text>}
        </TouchableOpacity> :         <TouchableOpacity style={styles.button} onPress={cntToggleState}>
          {cntToggle ? <Text style={styles.ppl}>참여완료</Text> : <Text style={styles.ppl}>참여하기</Text>}
        </TouchableOpacity>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatBox: {
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10
  },
  ppl: {
    alignSelf: "center",
    top: 5,
    color: 'white',
    fontWeight:'bold',
    fontSize: 16,
    marginTop:-1
  },
  button: {
    left: 280,
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#86CF3C",
  },
  button2: {
    left: 280,
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'grey'
  },
  together: {
    position: 'absolute',
    left: 112,
    marginTop:2,
    fontSize:18
  },
  heart: {
    zIndex: 13,
    width: 30,
    height: 30,
    top: 2,
    left: 20,
    position: 'relative',
  },
  down: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    bottom: -28,
  },
  mainArticle: {
    textAlign: "left",
    fontSize: 18,
  },
  profileLocation: {
    marginLeft: 60,
    marginTop: 20,
  },
  profileTime: {
    fontSize: 13,
    position: "absolute",
    marginTop: 35,
    marginLeft: 71,
  },
  profileName: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 8,
  },
  profileImg: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  separator: {
    position: "absolute",
    marginTop: 68,
    height: 2,
    width: '90%',
    marginLeft:10
  },
  profile: {
    position: "relative",
    alignContent: "center",
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  img: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    marginVertical: 20,
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
});
