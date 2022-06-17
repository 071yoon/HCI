import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";

export default function ProfileScreen() {
  const [name, setName] = React.useState("");
  const [cnt, setCnt] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [info, setInfo] = React.useState("");
  const [place, setPlace] = React.useState("");

  function resetInfos() {
    if (name === "") {
      Alert.alert("상품명을 작성해주세요!");
    } else if (title === "") {
      Alert.alert("제목을 작성해주세요!");
    } else if (cnt === "") {
      Alert.alert("모집 인원을 작성해주세요!");
    } else if (title === "") {
      Alert.alert("상품명을 작성해주세요!");
    } else {
      Alert.alert("게시완료되었습니다");
      setName("");
      setCnt("");
      setTitle("");
      setInfo("");
      setPlace("");
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.photo}>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>사진</Text>
        <ScrollView horizontal={true}>
          <View style={styles.recommendOne}>
            <Image
              source={require("../assets/images/grapes.png")}
              style={{ width: "100%", height: "100%" }}
            ></Image>
          </View>
          <View style={styles.recommendOne}>
            <Text style={styles.one}>+</Text>
          </View>
          <View style={styles.recommendOne}>
            <Text style={styles.one}>+</Text>
          </View>
          <View style={styles.recommendOne}>
            <Text style={styles.one}>+</Text>
          </View>
          <View style={styles.recommendOne}>
            <Text style={styles.one}>+</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.location}>
        <Text style={{ fontSize: 20, height: 40, marginLeft: 20 }}>게시</Text>
        <View style={styles.essentialLocate}>
          <Text style={{ color: "red",marginTop:-5 }}>* </Text>
          <TextInput
            style={styles.locate}
            placeholder={"  위치를 입력하세요"}
            onChangeText={setPlace}
            value={place}
          />
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.essentialName}>
          <Text style={{ color: "red", marginLeft:6, marginTop:6}}>* </Text>
          <TextInput
            style={styles.nameInput}
            placeholder={"상품명"}
            onChangeText={setName}
            value={name}
          />
        </View>
        <View style={styles.essentialPeople}>
          <Text style={{ color: "red", marginLeft:22, marginRight:-12, marginTop:6 }}>* </Text>
          <TextInput
            style={styles.cntInput}
            placeholder={"모집 인원"}
            onChangeText={setCnt}
            value={cnt}
          />
        </View>
        <View style={styles.essentialTitle}>
          <Text style={{ color: "red", marginLeft:6, marginTop:6, marginRight:-13 }}>* </Text>
          <TextInput
            style={styles.title}
            placeholder={"제목"}
            onChangeText={setTitle}
            value={title}
          />
        </View>
        <TextInput
          style={styles.info}
          placeholder={"내용을 입력해주세요"}
          onChangeText={setInfo}
          value={info}
        />
      </View>
      <TouchableOpacity onPress={resetInfos} style={styles.submit}>
        <Text style={styles.center}>게시하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  essentialTitle: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    left: 10,
    top: 55,
  },
  essentialPeople: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: 0,
    left: 250,
  },
  essentialName: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: 0,
    left: 10,
  },
  essentialLocate: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: 0,
    right: 30,
  },
  locate: {
    borderWidth: 1,
    width: 200,
    height: 35,
    borderRadius: 10,
  },
  center: {
    position: "absolute",
    top: 5,
    alignSelf: "center",
    color:'white',
  },
  submit: {
    position: "absolute",
    textAlign: "center",
    height: 30,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#97bc62",
    right: 10,
    bottom: 10,
    marginRight:20,
  },
  info: {
    position: "absolute",
    left: 13,
    top: 110,
    height: 250,
    width: 357,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    position: "relative",
    height: 40,
    width: 357,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  nameInput: {
    position: "relative",
    top: 0,
    height: 40,
    width: 200,
    marginVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  cntInput: {
    position: "relative",
    top: 0,
    height: 40,
    width: 100,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  items: {
    marginTop: 8,
    height: 450,
  },
  findLocation: {
    marginTop: 10,
    left: 10,
  },
  location: {
    backgroundColor: "white",
  },
  one: {
    fontSize: 40,
    top: 20,
    textAlign: "center",
    color: "white",
  },
  recommendOne: {
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 5,
    height: 100,
    width: 100,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  photo: {
    marginBottom: 20,
  },
  container: {
    top: 50,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
});
