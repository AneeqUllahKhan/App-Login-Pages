import React from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, Button} from 'react-native';

function LoginPage1() {
  return (
    <ImageBackground
      source={{
        uri: 'https://png.pngtree.com/thumb_back/fh260/back_our/20200814/ourmid/pngtree-simple-background-of-multiple-color-gradient-app-interface-materials-png-image_392301.jpg',
      }}>
      <View style={styles.margin}>
        <View style={styles.container}>
          <Text style={styles.heading}>Login Page 2</Text>
          <View style={styles.margin}>
            <TextInput style={styles.input} placeholder="Email Address" />
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <Button title='Login'/>
        </View>
      </View>
    </ImageBackground>
  );
}

export default LoginPage1;

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
    fontSize: 23,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
  },
});
