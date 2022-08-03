import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} 
from 'react-native';
import { TextInput } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

export default function Contact(){

  const [agree, setAgree]=useState(false);

return(
<View styles={styles.container}>
  <Text> Login Form </Text>
  <Text>you can reach us anytime </Text>
 
 <View>
    <Text> Enter Name:</Text>
    <TextInput/>
 </View>

 <View>
    <Text> Enter Passowrd:</Text>
    <TextInput
      secureTextEntry={true}
      autoCorrect={false}
      />
 </View>
      <View>
          <Checkbox
              value={ agree }
              onValueChange={ ( )=> setAgree(!agree) }
              color={agree ? "#4630EB" : undefined}
          />
          <Text>I have read the rules</Text>
      </View>

      <TouchableOpacity 
        style={ [styles.buttonStyle, { backgroundColor:agree ? "#4630EB" : "grey" } ]}
        disabled={!agree}
        >
        <Text>Login</Text>
      </TouchableOpacity>

</View>
)}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection:'column',
      // alignItems:'center',
      // justifyContent: 'center',
      backgroundColor: '#F5F5F5',
      marginTop:100,
      paddingTop:30,
      paddingHorizontal:30
    },
    buttonStyle:{
      borderRadius:9,
    }
});