import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text, View } from '../components/Themed';
import { Image } from 'react-native';

export default function ItemDetails({ navigation }: any) {
  const [toggle, setToggle] = React.useState(false);
  function toggleState() {
    setToggle(!toggle);
  }
  const [cntToggle, setcntToggle] = React.useState(false);
  function cntToggleState() {
    setcntToggle(!cntToggle);
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/images/hot.png")} />
      <View style={styles.profile}>
        <TouchableOpacity onPress={() => navigation.navigate('prof3')}>
          <Image style={styles.profileImg} source={require("../assets/images/prof3.png")} />
        </TouchableOpacity>
        <Text style={styles.profileName}></Text>
        <Text style={styles.profileTime}>1시간 전</Text>
        <Text style={styles.profileLocation}>서울특별시 광진구 화양동 131</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> 
      </View>
        <View style={styles.chatBox}>
        <Text style={styles.mainArticle}>포도 같이 구매하실 분 계신가요?</Text>
        <Text style={styles.mainArticle}>저는 포도 1송이면 충분한데, 같이 나누실 분 구합니다..</Text>
        <Text style={styles.mainArticle}>3명정도 모집합니다!</Text>
      </View>
      <TouchableOpacity onPress={toggleState} style={{zIndex: 10, top: 190, width: 50, height: 50}} />
      <View style={styles.down}>
        {toggle ? <Image style={styles.heart} source={require("../assets/images/heart_fill.png")} /> : <Image style={styles.heart} source={require("../assets/images/Heart.png")} />}
        <Text style={styles.together}>같이 구매하시겠어요?</Text>
        <TouchableOpacity style={styles.button} onPress={cntToggleState}>
          {cntToggle ? <Text style={styles.ppl}>2 / 3</Text> : <Text style={styles.ppl}>1 / 3</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatBox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  ppl: {
    alignSelf: 'center',
    top: 5,
    color: 'white',
  },
  button: {
    left: 280,
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#86CF3C'
  },
  together: {
    position: 'absolute',
    left: 120,
  },
  heart: {
    zIndex: 13,
    width: 25,
    height: 25,
    top: 5,
    left: 5,
    position: 'relative',
  },
  down: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    bottom: -30,
  },
  mainArticle: {
    textAlign: 'left',
    fontSize: 18,
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
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
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
    marginLeft:10
  },
  img: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    marginVertical:20,
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  }
});
