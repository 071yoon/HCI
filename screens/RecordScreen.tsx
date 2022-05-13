import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Daewha from '../components/daewha';
import Gwansim from '../components/gwansim';
import { useLinkProps } from '@react-navigation/native';

export default function RecordScreen({ navigation }: any) {
  const [toggle, setToggle] = React.useState(true);
  function toggleState() {
    setToggle(!toggle);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleState} style={styles.button}>
        {toggle? <View style={styles.toggledButton}/> : <View style={styles.untoggleButton} /> }
        <Text style={styles.textsL}>대화 목록</Text>
        <Text style={styles.textsR}>관심 목록</Text>
        
      </TouchableOpacity>
      {toggle? <Gwansim /> : <Daewha /> }
    </View>
    
  );
}


const styles = StyleSheet.create({
  textsL: {
    position: 'absolute',
    fontSize: 18,
    top: 5,
    left: 50,
  },
  textsR: {
    position: 'absolute',
    fontSize: 18,
    top: 5,
    right: 50,
  },
  button: {
    borderColor: '#86CF3C',
    borderWidth: 2,
    position: 'absolute',
    top: 30,
    width: '80%',
    overflow: 'hidden',
    height: 40,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  untoggleButton: {
    position: 'absolute',
    width: '50%',
    height: 40,
    overflow: 'hidden',
    backgroundColor: '#86CF3C',
  },
  toggledButton: {
    position: 'absolute',
    width: '50%',
    right: 0,
    height: 40,
    overflow: 'hidden',
    backgroundColor: '#86CF3C',
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
