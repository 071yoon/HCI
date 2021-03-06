import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import MainTabOne from "../screens/MainTabOne";
import SearchScreen from "../screens/SearchScreen";
import itemDetail1 from "../screens/itemDetail1";
import itemDetail2 from "../screens/itemDetail2";
import itemDetail3 from "../screens/itemDetail3";
import itemDetail4 from "../screens/itemDetail4";
import itemDetail5 from "../screens/itemDetail5";
import itemDetail6 from "../screens/itemDetail6";
import RecordScreen from "../screens/RecordScreen";
import Chatting from "../screens/Chatting";
import OnionSearch from "../components/onionSearch";
import BlankSearch from "../components/blankSearch";
import GrapeSearch from "../components/grapeSearch";
import Post from "../screens/Post";
import OnionProfile from "../components/OnionProfile";
import LoginScreen from "../screens/Login";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnionProfile"
        component={OnionProfile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="Chat"
        component={Chatting}
        options={{ title: "[??????] ???????????????!!", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="OnionSearch"
        component={OnionSearch}
        options={{ title: "??????" }}
      />
      <Stack.Screen
        name="GrapeSearch"
        component={GrapeSearch}
        options={{ title: "??????" }}
      />
      <Stack.Screen
        name="BlankSearch"
        component={BlankSearch}
        options={{ title: "Search" }}
      />
      <Stack.Screen
        name="TabOneDetail1"
        component={itemDetail1}
        options={{ title: "[??????] ???????????????!!" }}
      />
      <Stack.Screen
        name="TabOneDetail2"
        component={itemDetail2}
        options={{ title: "[??????] ?????? ?????? ??? ??????" }}
      />
      <Stack.Screen
        name="TabOneDetail3"
        component={itemDetail3}
        options={{ title: "[??????] ?????? ?????????" }}
      />
      <Stack.Screen
        name="TabOneDetail4"
        component={itemDetail4}
        options={{ title: "[??????] ?????? ???????????? ???" }}
      />
      <Stack.Screen
        name="TabOneDetail5"
        component={itemDetail5}
        options={{ title: "[????????????] ?????????" }}
      />
      <Stack.Screen
        name="TabOneDetail6"
        component={itemDetail6}
        options={{ title: "[??????] ?????? ????????????" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={MainTabOne}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "???",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require("../assets/images/HomeVector.png")} style={{width:40, height:40, marginBottom:8}}/>
            );
          },
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={SearchScreen}
        options={{
          title: "??????",
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require("../assets/images/SearchVector.png")} style={{width:44, height:44}}/>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={Post}
        options={{
          headerShown: false,
          title: "??? ??????",
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require("../assets/images/PlusVector.png")} style={{width:32, height:32, marginBottom:2}}/>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={RecordScreen}
        options={({ navigation }: RootTabScreenProps<"TabFour">) => ({
          title: "??????",
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require("../assets/images/RecordVector.png")} style={{width:40, height:40}}/>
            );
          },
        })}
      />
      <BottomTab.Screen
        name="TabFive"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "??? ??????",
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require("../assets/images/ProfileVector.png")} style={{width:42, height:42}}/>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
