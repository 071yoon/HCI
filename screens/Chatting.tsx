import React, {useState, useEffect} from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import threeBar from '../assets/images/threeBar.png'
import Alarm from '../assets/images/Alarm.png'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import onionSet from '../assets/images/onion.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { shouldUseActivityState } from 'react-native-screens';
import { TouchableOpacity } from 'react-native';
import onionProfile from '../assets/images/onionProfile.png'
import plus from '../assets/images/plus.png'
import send from '../assets/images/send.png'
import { Button } from 'react-native';
import Heart from '../assets/images/Heart.png';
import {
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
  } from 'react-native';	

export default function Chatting({ navigation }: any) {
  const [inputs, setInputs] = React.useState('');
const [comment, setComment] = React.useState();
let newComment = {
    content: '',
  };

  let data = 
    {
      comments: [
        {
          content: '그 사진 별로네요 1',
          }
        ]
    }
    const addComment = (input:any) => {
        newComment.content = input;
        let arrCopy = [...comment];
        arrCopy.push(newComment);
        setComment(arrCopy);
      };
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        <View style={styles.you}>
        <Image style={styles.profileImg} source={onionProfile} />
        <Text style={styles.chatBoxYou}>안녕하세요!</Text>
        </View>
        <View style={styles.you}>
        <Image style={styles.profileImg} source={onionProfile} />
        <Text style={styles.chatBoxYou}>반갑습니다 ㅎㅎ</Text>
        </View>
        <View style={styles.me}>
        <Text style={styles.chatBoxMe}>다들 어디가 편하신가요?</Text>
        </View>
        <View style={styles.me}>
        <Text style={styles.chatBoxMe}>전 건대입구역이에요!</Text>
        </View>
      </View>
        <View style={styles.down}>
          <Image style={styles.plus} source={plus} />
          <TextInput
          style={styles.input}
          placeholder={'메시지를 입력하세요'}
          onChangeText={setInputs}
          value={inputs}
          />
          <Image style={styles.plus} source={send} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    height:'82%',
    marginTop:40,
    marginHorizontal:20,
  },
  chatBoxMe: {
    backgroundColor: '#86cf3c',
    paddingVertical:8,
    paddingHorizontal:10,
    borderRadius: 10,
    fontSize:16,
    color: 'white'
  },
  chatBoxYou: {
    backgroundColor : "#F6F6F6",
    paddingVertical:8,
    paddingHorizontal:10,
    borderRadius: 10,
    fontSize:16,
  },
  me: {
    display: 'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    marginBottom: 20,
  },
  you: {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 20,
  },
    input: {
      top: 0,
      height: 40,
      width: '70%',
      marginLeft: 20,
      borderRadius: 10,
      padding: 10,
      backgroundColor : "#F6F6F6",
    },
    plus : {
      width: 24,
      height: 24,
      marginLeft : 20,
    },
    down: {
      borderTopWidth:1.5,
      borderTopColor:"#F6F6F6",
      borderStyle : 'solid',
      display: 'flex',
      flexDirection: 'row',
      alignItems : 'center',
      width: '100%',
      height: '12%',
      backgroundColor: 'white',

    },
    mainArticle: {
        textAlign: 'left',
        fontSize: 20,
    },
    profileLocation: {
        marginLeft: 60,
        marginTop: 20,
    },
    profileTime: {
        fontSize: 13,
        position: 'absolute',
        marginTop: 35,
        marginLeft: 80,
    },
    profileName: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 8,
    },
    profileImg: {
        width: 36,
        height: 36,
        marginRight:10
    },
    separator: {
        position: 'absolute',
        marginTop: 68,
        height: 2,
        width: '80%',
        marginLeft: '10%',
    },
    profile: {
        position: 'relative',
        alignContent: 'center',
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
    },
    img: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
    }
});
