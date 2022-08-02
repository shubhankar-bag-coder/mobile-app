import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList} 
from 'react-native';


export default function Fileone(){



return(
<View style={styles.container}>
  
{/* <StatusBar style="auto" /> */}

<Text>hello</Text>
</View>


)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection:'column',
      // alignItems:'center',
      // justifyContent: 'center',
      // backgroundColor: '#F5F5F5',
      marginTop:100,
      
    },
});