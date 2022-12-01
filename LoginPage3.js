import React from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, Button} from 'react-native';

function App() {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRymyiX0MxTm8NER0S3xcOZ53jqiss2gmEJZH3W50iFi34Bfulu6Hz-zYKMk2tVAEAuU&usqp=CAU',
      }}>
      <View style={styles.margin}>
        <View style={styles.container}>
          <Text style={styles.heading}>Login Page 3</Text>
          <View style={styles.margin}>
            <TextInput style={styles.input} placeholder="Email Address" />
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <Button color='violet' title='Signin'/>
          <View style={{flexDirection:'row',marginTop:6}}>
            <Text style={[{flex:6}]}></Text>
            <Text style={[{flex:6,color:'grey'}]}>Forget Your Password ?</Text>
          </View>
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
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'green',
    backgroundColor: 'white',
  },
  button: {
    color: 'white',
    radius: 3,
    backgroundColor: 'black',
  }
});
