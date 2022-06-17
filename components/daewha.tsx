import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { Image } from "react-native";
import { Text, View } from "../components/Themed";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function daewha() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate("Chat")}
        >
          <Image
            style={styles.img}
            source={require("../assets/images/onionProfile.png")}
          />
          <Text style={styles.title}>양파좋아</Text>
          <Text style={styles.message}>전 건대입구역이에요!</Text>
          <View style={styles.separator} />
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            style={styles.img}
            source={require("../assets/images/prof2.png")}
          />
          <Text style={styles.title}>희도</Text>
          <Text style={styles.message}>엽떡 매운맛으로 시키겠습니다.</Text>
          <View style={styles.separator} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  message: {
    position: "absolute",
    top: 30,
    left: 80,
  },
  title: {
    position: "absolute",
    left: 80,
    fontSize: 18,
    fontWeight: "bold",
  },
  img: {
    width: 60,
    height: 60,
  },
  profile: {
    marginTop: 30,
    width: "100%",
    height: 60,
  },
  container: {
    width: "80%",
    height: "75%",
    //backgroundColor: 'green',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "100%",
    backgroundColor: "#D3D3D3",
  },
});
