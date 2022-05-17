import { Alert, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { shouldUseActivityState } from 'react-native-screens';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';

export default function ItemDetails({ navigation }: any) {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require("../assets/images/onion.jpg")} />
        <View style={styles.profile}>
            <Image style={styles.profileImg} source={require("../assets/images/onionProfile.png")} />
            <Text style={styles.profileName}>양파좋아</Text>
            <Text style={styles.profileTime}>1시간 전</Text>
            <Text style={styles.profileLocation}>서울특별시 광진구 화양동 131</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> 
        </View>
        <Text style={styles.mainArticle}>양파 같이 구매하실 분 계신가요?</Text>
        <Text style={styles.mainArticle}>카레 만들건데 양파 한 망은 너무 많은 것 같아서 고민이네요ㅠㅠ</Text>
        <Text style={styles.mainArticle}>오늘 저녁으로 먹을 예정이라 1시간 반 동안만 구할게요!</Text>
        <View style={styles.down}>
            <Image style={styles.heart} source={require("../assets/images/Heart.png")} />
            <Text style={styles.together}>같이 구매하시겠어요?</Text>
            <View style={styles.button}>
                <Text style={styles.ppl}>2 / 3</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    ppl: {
        alignSelf: 'center',
        marginTop: 3,
        marginBottom: 3,
    },
    button: {
        marginLeft: 110,
        width: 80,
        height: 30,
        marginTop: 6,
        borderRadius: 10,
        backgroundColor: '#86CF3C'
    },
    together: {
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
    },
    heart: {
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
    },
    down: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        marginTop: 650,

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
