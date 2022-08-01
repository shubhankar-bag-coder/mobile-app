import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList} 
from 'react-native';

export default function Fileone(){

return(
<View style={styles.container}>
  
{/* <StatusBar style="auto" /> */}
  <View>
  <Text> Hello </Text>
  </View>
</View>


)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      // alignItems:'center',
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
      borderColor:'blue',
      fontSize:20,
     
    }
});