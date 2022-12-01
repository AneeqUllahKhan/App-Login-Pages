import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import logo from './assets/logo.png'

function App() {
  return (
    <ImageBackground
      source={{
        uri: 'https://static.wixstatic.com/media/ab9037_48f6997941f947568eedc220b762588e~mv2.png/v1/fill/w_908,h_1687,al_c,q_90,enc_auto/ab9037_48f6997941f947568eedc220b762588e~mv2.png',
      }}>
      <View style={styles.margin}>
        <View style={styles.container}>
          <Text style={styles.heading1}>Login Page 5</Text>
          <Image source={logo} style={{width: 60, height: 60, marginLeft: 'auto', marginRight: 'auto'}}/>
          <View style={styles.margin}>
            <TextInput style={styles.input} placeholder="Email Address" />
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={[{flex: 6}]}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <Text style={[{flex: 6, color: 'white', padding:3}]}>
              Forget Your Password ?
            </Text>
          </View>
         <Text style={{marginTop:200,textAlign:'center',}}>Don't Have An Account? <Text style={{color:'#0e78b7'}}>Signup</Text> </Text>
        </View>

      </View>
    </ImageBackground>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
  margin: {
    marginTop: 50,
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading1: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding:12,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0e78b7',
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    width: 100,
    padding: 8,
    textAlign: 'center',
    height: 35,
    borderRadius: 20,
    backgroundColor: '#0e78b7',
  },
});
