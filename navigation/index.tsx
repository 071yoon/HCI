/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeVector from '../assets/images/HomeVector.png';
import PlaceVector from '../assets/images/PlaceVector.png';
import ProfileVector from '../assets/images/ProfileVector.png';
import SearchVector from '../assets/images/SearchVector.png';
import RecordVector from '../assets/images/RecordVector.png';
import MainTabOne from '../screens/MainTabOne';
import SearchScreen from '../screens/SearchScreen';
import itemDetail from '../screens/itemDetail';
import RecordScreen from '../screens/RecordScreen';
import Chatting from '../screens/Chatting';
import Post from '../screens/Post';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="TabOneDetail" component={itemDetail} />
      <Stack.Screen name="Chat" component={Chatting} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
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
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={MainTabOne}
        options={
          ({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: '홈',
          headerShown: false, 
          tabBarIcon: ({ focused }) => {
          return(<Image source={HomeVector} />)}
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({ focused }) => {
            return(<Image source={SearchVector} />)}
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={Post}
        options={{
          headerShown: false,
          title: '글 작성하기',
          tabBarIcon: ({ focused }) => {
            return(<Image source={PlaceVector} />)}
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={RecordScreen}
        options={({ navigation }: RootTabScreenProps<'TabFour'>) => ({
          title: '기록',
          tabBarIcon: ({ focused }) => {
            return(<Image source={RecordVector} />)}
        })}
      />
      <BottomTab.Screen
        name="TabFive"
        component={ProfileScreen}
        options={{
          headerShown: false, 
          title: '내 정보',
          tabBarIcon: ({ focused }) => {
            return(<Image source={ProfileVector} />)}
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
