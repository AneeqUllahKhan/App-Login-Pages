import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

function App() {
  return (
      <View style={styles.margin}>
        <View style={styles.container}>
          <Text style={styles.heading}>Welcome!</Text>
          <Text style={styles.heading1}>Login Page 4</Text>
          <View style={styles.margin}>
            <TextInput style={styles.input} placeholder="Email Address" />
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={[{flex: 6}]}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <Text style={[{flex: 6, color: 'grey', padding:3}]}>
              Forget Your Password ?
            </Text>
          </View>
         <Text style={{marginTop:250,textAlign:'center'}}>Don't Have An Account? <Text style={{color:'#fbb148'}}>Signup</Text> </Text>
        </View>

      </View>
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
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading1: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fbb148',
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    width: 100,
    padding: 8,
    textAlign: 'center',
    height: 35,
    borderRadius: 20,
    backgroundColor: '#fbb148',
  },
});
