import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { shouldUseActivityState } from 'react-native-screens';
import { TouchableOpacity } from 'react-native';
import itemDetail from './itemDetail';
import { TextInput } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = React.useState('');
  const [cnt, setCnt] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [info, setInfo] = React.useState('');
  const [place, setPlace] = React.useState('');



  return (
    <ScrollView style={styles.container}>
      <View style={styles.photo}>
        <Text style={{fontSize:20}}>사진</Text>
        <ScrollView horizontal={true}>
          <View style={styles.recommendOne}>
              <Image source={require("../assets/images/grapes.png")} style={{width: "100%", height: "100%"}}></Image>
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
        <Text style={{fontSize:20, height: 40}}>게시</Text>
        <TextInput style={styles.locate}
        placeholder={'위치를 입력하세요'}
        onChangeText={setPlace}
        value={place}
      />
      </View>
      <View style={styles.items}>

      <TextInput
        style={styles.nameInput}
        placeholder={'상품명'}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.cntInput}
        placeholder={'모집 인원'}
        onChangeText={setCnt}
        value={cnt}
      />
      <TextInput
        style={styles.title}
        placeholder={'제목'}
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={styles.info}
        placeholder={'내용을 입력해주세요'}
        onChangeText={setInfo}
        value={info}
      />
      </View>
      <View style={styles.submit}>
        <Text style={styles.center}>게시하기</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  locate: {
    position:'absolute',
    right: 20,
    borderWidth: 1,
    width: 200,
    height: 35,
    borderRadius: 10,
  },
  center :{
    position: 'absolute',
    top: 5,
    alignSelf: 'center',
  },
  submit: {
    position: 'absolute',
    textAlign: 'center',
    height: 30,
    width: 100,
    borderRadius: 30,
    backgroundColor: '#92DF45',
    right: 10,
    bottom: 10,
  },
  info: {
    position: 'absolute',
    top: 100,
    height: 250,
    width: '90%',
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    position: 'absolute',
    top: 50,
    height: 40,
    width: '90%',
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  nameInput: {
    position: 'absolute',
    top: 0,
    height: 40,
    width: '60%',
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  cntInput: {
    position: 'absolute',
    top: 0,
    right: 10,
    height: 40,
    width: '30%',
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
    backgroundColor: 'white',
  },
  one: {
    fontSize: 40,
    top: 20,
    textAlign: 'center',
    color: 'white',
  },
  recommendOne: {
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 5,
    height: 100,
    width: 100,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  photo: {
    marginBottom: 20,
  },
  container: {
    top: 50,
    display: 'flex',
    flexDirection: 'column'
  },
});
