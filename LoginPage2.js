import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

function LoginPage2() {
  return (
    <>        
      <View style={styles.container}>
        <Text style={styles.heading}>Login Page</Text>
        <View style={styles.margin}>
          <TextInput
            style={[styles.input]}
            placeholder="Email Address"
          />
          <TextInput
            style={[styles.input]}
            placeholder="Password"
          />
        </View>
        <Button style={{flex:3}} title="Login" color="green" href='LoginPage2.js'/>
      </View>
    </>
  );
}
export default LoginPage2;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
  heading: {
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  margin:{
    marginTop: 20,
  }
});