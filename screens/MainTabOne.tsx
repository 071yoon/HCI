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


const Stack = createNativeStackNavigator();

export default function TabOneScreen({ navigation }: any)  {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.topNav}>
        <Image style={styles.bar} source={threeBar} />
        <Image style={styles.alarm} source={Alarm} />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
        <View style={styles.main}>
        <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('TabOneDetail')}>
            <View style={styles.count}>
            <Text style={styles.countText}>2 / 3</Text>
            </View>
            <Image style={styles.boxImage} source={onionSet}/>
            <View style={styles.boxSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.mainText}>[양파] 필요하신분!!</Text>
            <Text style={styles.subText}>01:23:37</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('TabOneDetail')}>
            <View style={styles.count}>
            <Text style={styles.countText}>1 / 2</Text>
            </View>
            <Image style={styles.boxImage} source={onionSet}/>
            <View style={styles.boxSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.mainText}>[엽떡] 같이 먹으실 분!!</Text>
            <Text style={styles.subText}>00:40:36</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('TabOneDetail')}>
            <View style={styles.count}>
            <Text style={styles.countText}>1 / 3</Text>
            </View>
            <Image style={styles.boxImage} source={onionSet}/>
            <View style={styles.boxSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.mainText}>[포도] 먹고 싶어요</Text>
            <Text style={styles.subText}>20:50:34</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('TabOneDetail')}>
            <View style={styles.count}>
            <Text style={styles.countText}>2 / 4</Text>
            </View>
            <Image style={styles.boxImage} source={onionSet}/>
            <View style={styles.boxSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.mainText}>[사과] 같이 구매하실 분</Text>
            <Text style={styles.subText}>02:50:23</Text>         
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('TabOneDetail')}>
            <View style={styles.count}>
            <Text style={styles.countText}>2 / 4</Text>
            </View>
            <Image style={styles.boxImage} source={onionSet}/>
            <View style={styles.boxSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.mainText}>[고춧가루] 나눠요</Text>
            <Text style={styles.subText}>06:30:32</Text>         
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('TabOneDetail')}>    
            <View style={styles.count}>
            <Text style={styles.countText}>1 / 5</Text>
            </View>
            <Image style={styles.boxImage} source={onionSet}/>
            <View style={styles.boxSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.mainText}>[대파] 같이 구매하실 분 구해요</Text>
            <Text style={styles.subText}>16:48:17</Text>
         </TouchableOpacity>
         </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
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
    backgroundColor: 'white',
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
});
