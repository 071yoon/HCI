import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import React from "react";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Text style={{ top: 10 }}>{"             ID   "}</Text>
        <TextInput placeholder="ID" style={styles.id}></TextInput>
      </View>
      <View style={styles.inputs}>
        <Text style={{ top: 10 }}>{"Password  "}</Text>
        <TextInput
          style={styles.id}
          secureTextEntry={true}
          placeholder="Password"
        ></TextInput>
      </View>
      <View style={styles.bubble}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Root")}
        >
          <Text style={styles.center}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Root")}
        >
          <Text style={styles.center}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignSelf: "center",
    top: 5,
  },
  bubble: {
    flexDirection: "row",
  },
  id: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    height: 40,
    width: 200,
  },
  inputs: {
    width: "80%",
    height: 50,
    flexDirection: "row",
  },
  login: {
    marginRight: 10,
    marginLeft: 10,
    width: 100,
    height: 30,
    backgroundColor: "#97bc62",
  },
  container: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 700,
  },
});
