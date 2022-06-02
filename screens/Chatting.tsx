import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { Image } from "react-native";

export default function Chatting({ navigation }: any) {
  const [inputs, setInputs] = React.useState("");
  const [tmp, setTmp] = React.useState([""]);
  const [cnt, setCnt] = React.useState(0);

  function submit() {
    setTmp([...tmp, inputs]);
    setInputs("");
    setCnt(cnt + 1);
  }
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        <View style={styles.you}>
          <Image
            style={styles.profileImg}
            source={require("../assets/images/onionProfile.png")}
          />
          <Text style={styles.chatBoxYou}>안녕하세요!</Text>
        </View>
        <View style={styles.you}>
          <Image
            style={styles.profileImg}
            source={require("../assets/images/onionProfile.png")}
          />
          <Text style={styles.chatBoxYou}>반갑습니다 ㅎㅎ</Text>
        </View>
        <View style={styles.me}>
          <Text style={styles.chatBoxMe}>다들 어디가 편하신가요?</Text>
        </View>
        <View style={styles.me}>
          <Text style={styles.chatBoxMe}>전 건대입구역이에요!</Text>
        </View>
        {cnt >= 1 ? (
          <View style={styles.me}>
            <Text style={styles.chatBoxMe}>{tmp[1]}</Text>
          </View>
        ) : null}
        {cnt >= 2 ? (
          <View style={styles.me}>
            <Text style={styles.chatBoxMe}>{tmp[2]}</Text>
          </View>
        ) : null}
        {cnt >= 3 ? (
          <View style={styles.me}>
            <Text style={styles.chatBoxMe}>{tmp[3]}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.down}>
        <TouchableOpacity>
          <Image
            style={styles.plus}
            source={require("../assets/images/plus.png")}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder={"메시지를 입력하세요"}
          onChangeText={setInputs}
          value={inputs}
        />
        <TouchableOpacity onPress={submit}>
          <Image
            style={styles.plus}
            source={require("../assets/images/send.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    height: "82%",
    marginTop: 40,
    marginHorizontal: 20,
  },
  chatBoxMe: {
    backgroundColor: "#86cf3c",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    color: "white",
  },
  chatBoxYou: {
    backgroundColor: "#F6F6F6",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  me: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 20,
  },
  you: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    top: 0,
    height: 40,
    width: "70%",
    marginLeft: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },
  plus: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  down: {
    borderTopWidth: 1.5,
    borderTopColor: "#F6F6F6",
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "12%",
    backgroundColor: "white",
  },
  profileImg: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  img: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
});
