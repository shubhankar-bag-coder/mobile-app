import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Alert} 
from 'react-native';
import { TextInput } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

export default function Contact(){

  const [agree, setAgree]=useState(false);
  
  const [username, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  // console.log(username,Password);

  const Submit=()=>{
    // return Alert.alert(`Welcome ${username}`);
    Alert.alert('Pls details');
    if(username=="" || Password==""){
        }else{
          Alert.alert(`Welcome ${username}`);
        }
  };
  

return(
<View styles={styles.container}>
  <Text> Login Form </Text>
  <Text>you can reach us anytime </Text>
 
 <View>
    <Text> Enter Name:</Text>
    <TextInput
      value={username}
      onChangeText={ (actualdata)=> setuserName(actualdata) } />
 </View>

 <View>
    <Text> Enter Password:</Text>
    <TextInput
      secureTextEntry={true}
      autoCorrect={false}
      value={Password}
      onChangeText={ (actualdata)=> setPassword(actualdata) } 
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
        onPress={ ()=> Submit()}
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