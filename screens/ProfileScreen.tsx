import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import threeBar from '../assets/images/threeBar.png'
import Alarm from '../assets/images/Alarm.png'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import onionSet from '../assets/images/onion-set.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { shouldUseActivityState } from 'react-native-screens';
import { TouchableOpacity } from 'react-native';
import itemDetail from './itemDetail';
import onionProfile from '../assets/images/onionProfile.png'
import setting from '../assets/images/brightness_5.png'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Image style={styles.bar} source={threeBar} />
        <Image style={styles.alarm} source={Alarm} />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      <View style = {styles.profile}>
        <Image style={styles.profileImg} source={onionProfile} />
        <View style = {styles.profileText}>
          <Text style = {styles.profileTitle}>양파좋아</Text>
          <Text style = {styles.profileSubTitle}>서울 특별시 광진구</Text>
          <TouchableOpacity 
          onPress = {()=>{}}
          style = {styles.profileEdit}>
            <Text style = {styles.profileEditText}>프로필 설정</Text>
            <Image style = {styles.profileEditImage} source={setting} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileText : {

    width: 230,
    marginLeft: 20,
  },
  profileEdit : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop : 6,
    width : '100%',
    height : 24,
    borderRadius: 5,
    justifyContent: 'center',
    borderStyle : 'solid',
    borderColor : "#afafaf",
    borderWidth : 1.2,
  },
  profileEditText : {
    fontWeight: 'bold',
    color : "#afafaf"
  }, 
  profileEditImage : {
    marginLeft : 4
  }, 
  profileSubTitle : {
    fontSize : 15,
    marginTop : 4,
  },
  profileTitle : {
    width: '100%',
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 18,
  },
  mainText: {
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    position: 'absolute',
    color: 'gray',
    marginTop: 175,
  },
  boxSeparator: {
    marginVertical: 7,
    height: 1,
    width: '80%',
  },
  boxImage: {
    width: 150,
    height: 100,
  },
  countText: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  boxContainer: {
    position: 'relative',
    marginTop: 4,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    width: 150,
    height: 200,

    borderRadius: 30,
    overflow: 'hidden',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  count: {
    backgroundColor: '#86cf3c',
    width: 150,
    height: 35,
    marginTop: 0,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
  },
  topNav: {
    marginTop: 50,
    height: 60,
    position: 'relative',
    alignContent: 'center',
  },
  bar: {
    position: 'absolute',
    marginLeft: 20,
    marginTop: 15,
  },
  alarm: {
    position: 'absolute',
    marginLeft: 340,
    marginTop: 10,
  },
  separator: {
    marginVertical: 50,
    height: 1,
    width: '100%',
  },
  profile: {
    height:100,
    display:'flex',
    flexDirection:'row',
    alignItems : 'center',
    justifyContent : 'center',

  },
  profileImg: {
    width: 86,
    height: 86,
    marginTop : 10
},
});
