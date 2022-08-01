import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} 
from 'react-native';

import { 
  Poppins_400Regular,

  Poppins_500Medium,

  Poppins_700Bold,

  Poppins_900Black,

} from '@expo-google-fonts/poppins'

import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';




export default function Fileone(props){
 
  
  // let [fontsLoad]=useFonts({
  //   Poppins_400Regular,
  
  //   Poppins_500Medium,
  
  //   Poppins_700Bold,
  
  //   Poppins_900Black,
  
  //   });
  
  // if(!fontsLoad) {
  //   return <AppLoading/>
  // }

return(


<View style={styles.container}>
  <View styles={{
    backgroundColor:'black', height:90, diplay:'none'
  }}>

  </View>
<StatusBar style="auto" />
  <View style={styles.M_text}>

    {/* Trying Map function */}
    {/* {
      props.items.map((data)=>
      <Text styles={styles.txt} word={data.word}/>
      )
    } */}


      <Text style={styles.txt}> {props.items[0].word} </Text>
      <Text style={styles.txt}> {props.items[1].word} </Text>
      <Text style={styles.txt}> {props.items[2].word} </Text>
      <Text style={styles.txt}> {props.items[3].word} </Text>

     
  </View>
</View>


)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'strectch',
      justifyContent: 'center',

      color:'black',
      backgroundColor: '#F5F5F5',
      marginTop:100,
      
    },M_text:{
      // margin:30,
      textAlign:'center',
    },
    txt:{
      // margin:30,
      paddingVertical:30,
      marginVertical:10,
      borderWidth:1.5,
      borderColor:'blue'
     
    }
});