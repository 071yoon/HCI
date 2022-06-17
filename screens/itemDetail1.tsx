import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "../components/Themed";
import { Image } from "react-native";
import { Alert } from "react-native";

export default function ItemDetails1({ navigation }: any) {
  const [toggle, setToggle] = React.useState(false);
  function toggleState() {
    setToggle(!toggle);
  }
  const [showText, setShowText] = React.useState(true);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [cntToggle, setcntToggle] = React.useState(false);
  function cntToggleState() {
    if (!cntToggle) {
      return Alert.alert(
        "같이 구매하시겠어요?",
        "예를 누르시면 참여가 확정됩니다",
        [
          // The "Yes" button
          {
            text: "예",
            onPress: () => {
              setcntToggle(!cntToggle);
            },
          },
          // The "No" button
          // Does nothing but dismiss the dialog when tapped
          {
            text: "아니요",
          },
        ]
      );
    } else {
      return Alert.alert("취소하시겠어요?", "예를 누르시면 참여가 취소됩니다", [
        // The "Yes" button
        {
          text: "예",
          onPress: () => {
            setcntToggle(!cntToggle);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "아니요",
        },
      ]);
    }
  }
  return (
    <View style={styles.container}>
      <View style = {{height:30, marginTop:20}}>
        {
          cntToggle?
          <Text style={styles.magam}>
            마감되었습니다.
          </Text> :
          <Text
          style={[styles.textStyle, { display: showText ? "none" : "flex" }]}
        >
          마감 임박!{" "}
        </Text>  
        }
        
      </View>
      <Image
        style={styles.img}
        source={require("../assets/images/onion.jpg")}
      />
      <View style={styles.profile}>
        <TouchableOpacity onPress={() => navigation.navigate("OnionProfile")}>
          <Image
            style={styles.profileImg}
            source={require("../assets/images/onionProfile.png")}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>양파좋아</Text>
        <Text style={styles.profileTime}>1시간 전</Text>
        <Text style={styles.profileLocation}>서울특별시 광진구 화양동 131</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <View style={styles.chatBox}>
        <Text style={styles.mainArticle}>양파 같이 구매하실 분 계신가요?</Text>
        <Text style={styles.mainArticle}>
          카레 만들건데 양파 한 망은 너무 많은 것 같아서 고민이네요ㅠㅠ
        </Text>
        <Text style={styles.mainArticle}>
          오늘 저녁으로 먹을 예정이라 1시간 반 동안만 구할게요!
        </Text>
      </View>
      <TouchableOpacity
        onPress={toggleState}
        style={{ zIndex: 10, top: 190, width: 50, height: 50}}
      />
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
        {cntToggle ? (
          <TouchableOpacity style={styles.button2} onPress={cntToggleState}>
            {cntToggle ? (
              <Text style={styles.ppl}>참여완료</Text>
            ) : (
              <Text style={styles.ppl}>참여하기</Text>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={cntToggleState}>
            {cntToggle ? (
              <Text style={styles.ppl}>참여완료</Text>
            ) : (
              <Text style={styles.ppl}>참여하기</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  magam: {
    fontSize: 22,
    color: "grey",
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 22,
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },
  chatBox: {
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10,
  },
  ppl: {
    alignSelf: "center",
    top: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: -1,
  },
  button: {
    left: 280,
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#97bc62",
  },
  button2: {
    left: 280,
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: "grey",
  },
  together: {
    position: "absolute",
    left: 112,
    marginTop: 2,
    fontSize: 18,
  },
  heart: {
    zIndex: 13,
    width: 30,
    height: 30,
    top: 2,
    left: 20,
    position: "relative",
  },
  down: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "10%",
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
    width: "90%",
    marginLeft: 10,
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
    width: "70%",
    height: 200,
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
