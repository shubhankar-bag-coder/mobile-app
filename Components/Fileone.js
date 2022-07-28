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




export default function Fileone(){
 
  
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
      <StatusBar style="auto" />
  <View style={styles.text}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
  </View>
</View>


)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'strectch',
      justifyContent: 'space-between',
      
      direction:'rtl',

      color:'black',
      backgroundColor: '#F5F5F5',
      marginTop:100,
      
    },text:{
      margin:30,
    }
});