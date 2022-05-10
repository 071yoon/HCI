import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import onionSet from '../assets/images/onion-set.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { shouldUseActivityState } from 'react-native-screens';
import { TouchableOpacity } from 'react-native';
import itemDetail from './itemDetail';
import onionProfile from '../assets/images/onionProfile.png'
import { TextInput } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = React.useState('');
  const [cnt, setCnt] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [info, setInfo] = React.useState('');


  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Text style={{fontSize:20}}>사진</Text>
        <ScrollView horizontal={true}>
          <View style={styles.recommendOne}>
              <Text style={styles.one}>포도</Text>
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
        <Text style={{fontSize:20}}>위치</Text>
        <Text style={styles.findLocation}>위치를 입력하세요</Text>
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
        placeholder={'인원'}
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
        placeholder={'내용'}
        onChangeText={setInfo}
        value={info}
      />
      </View>
      <View style={styles.submit}>
        <Text>게시하기</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 10,
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
    fontSize: 20,
    top: 35,
    textAlign: 'center',
  },
  recommendOne: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    height: 100,
    borderRadius: 15,
    width: 150,
    backgroundColor: 'rgba(0,0,0,0.3)',
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
