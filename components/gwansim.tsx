import { StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Onion from '../assets/images/onionProfile.png';

export default function gwansim(){
  const navigation = useNavigation();
    return(
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate('TabOneDetail')}>
            <Image style={styles.img} source={Onion} />
            <Text style={styles.title}>양파좋아</Text>
            <Text style={styles.message}>[양파] 양파 필요하신분!!</Text>
            <View style={styles.bubble}>
              <Text style={styles.bubbleText}>2/3</Text>
            </View>
            <View style={styles.separator} />
          </TouchableOpacity>
          <View style={styles.profile}>
            <Image style={styles.img} source={Onion} />
            <View style={styles.separator} />
          </View>
          <View style={styles.profile}>
            <Image style={styles.img} source={Onion} />
            <View style={styles.separator} />
          </View>
          <View style={styles.profile}>
            <Image style={styles.img} source={Onion} />
            <View style={styles.separator} />
          </View>

          
        </View>
      </>
    )
}


const styles = StyleSheet.create({
  bubbleText: {
    position: 'absolute',
    top: 5,
    left: 18,
  },
  bubble: {
    position: 'absolute',
    top: 15,
    left: 250,
    width: 60,
    height: 30,
    backgroundColor: '#86CF3C',
    borderRadius: 13,
  },
  message: {
    position: 'absolute',
    top: 30,
    left: 80,
  },
  title: {
    position: 'absolute',
    left: 80,
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    width: 60,
    height: 60,
  },
  profile: {
    marginTop: 30,
    width: '100%',
    height: 60,
  },
  container: {
    width: '80%',
    height: '75%',
    //backgroundColor: 'green',
  },
  separator: {
      marginVertical: 10,
      height: 1,
      width: '100%',
      backgroundColor: '#D3D3D3',
  },
});