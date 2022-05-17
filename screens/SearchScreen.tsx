import { StyleSheet, TextInput, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
export default function SearchScreen() {
  const [inputs, setInputs] = React.useState('');
  return (
    <View style={styles.container}>
       <TextInput
        style={styles.input}
        placeholder={'Search'}
        onChangeText={setInputs}
        value={inputs}
      />
      <View style={styles.recent}>
        <Text style={{fontSize: 17}}>최근 검색어</Text>
        <View style={styles.recentBubble}>
          <Text style={styles.bubble}>양파  x</Text>
          <Text style={styles.bubble}>포도  x</Text>
          <Text style={styles.bubble}>대파  x</Text>
          <Text style={styles.bubble}>당근  x</Text>
        </View>
      </View>
      <View style={styles.recommend}>
        <Text style={{fontSize: 17}}>추천 검색어</Text>
        <View style={styles.recentBubble}>
        <ScrollView horizontal={true} > 
          <View style={styles.recommendOne}>
            <ImageBackground source={require("../assets/images/grape.jpg")} style={{width: "100%", height: "100%"}} imageStyle={{borderRadius: 15}} resizeMode='cover' blurRadius={10}>
            <Text style={styles.one}>포도</Text>
            </ImageBackground>
          </View>    
          <View style={styles.recommendOne}>
            <ImageBackground source={require("../assets/images/onion.jpg")} style={{width: "100%", height: "100%"}} imageStyle={{borderRadius: 15}} resizeMode='cover' blurRadius={10}>
            <Text style={styles.one}>양파</Text>
            </ImageBackground>
          </View>
          <View style={styles.recommendOne}>
            <ImageBackground source={require("../assets/images/pepper.jpg")} style={{width: "100%", height: "100%"}} imageStyle={{borderRadius: 15}} resizeMode='cover' blurRadius={10}>
            <Text style={styles.one}>고춧가루</Text>
            </ImageBackground>
          </View>
          <View style={styles.recommendOne}>
            <ImageBackground source={require("../assets/images/apple.jpg")} style={{width: "100%", height: "100%"}} imageStyle={{borderRadius: 15}} resizeMode='cover' blurRadius={10}>
            <Text style={styles.one}>사과</Text>
            </ImageBackground>
          </View>
        </ScrollView>
        </View>
      </View>
      <View style={styles.issue}>
        <Text style={{fontSize: 17}}>인기 검색어</Text>
          <Text style={styles.issueText}>1 양파</Text>
          <Text style={styles.issueText}>2 감자</Text>
          <Text style={styles.issueText}>3 포도</Text>
          <Text style={styles.issueText}>4 엽떡</Text>
          <Text style={styles.issueText}>5 엽기 떡볶이</Text>
          <Text style={styles.issueText}>6 김치</Text>
          <Text style={styles.issueText}>7 고춧가루</Text>
          <Text style={styles.issueText}>8 생수</Text>
          <Text style={styles.issueText}>9 딸기</Text>
          <Text style={styles.issueText}>10 대파</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  issueText: {
    marginTop: 10,
  },
  one: {
    fontSize: 16,
    color: 'white',
    top: 35,
    borderRadius: 10,
    padding: 2,
    marginLeft: 30,
    marginRight: 10,
    width: 74,
    height: 30,
    backgroundColor: 'rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  recommendOne: {
    marginLeft: 5,
    marginRight: 10,
    height: 100,
    borderRadius: 15,
    width: 150,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  bubble: {
    borderRadius: 30,
    padding: 5,
    color: 'white',
    marginLeft: 10,
    width: 70,
    height: 30,
    fontSize: 15,
    backgroundColor: '#92DF45',
    textAlign: 'center',
  },
  recentBubble: {
    top: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  recent: {
    position: 'absolute',
    top: 80,
    left: 30,
  },
  recommend: {
    position: 'absolute',
    top: 160,
    left: 30,
  },
  issue: {
    position: 'absolute',
    top: 300,
    left: 30,
  },
  input: {
    position: 'absolute',
    top: 0,
    height: 40,
    width: '80%',
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
