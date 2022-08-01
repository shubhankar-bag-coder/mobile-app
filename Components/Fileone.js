import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList} 
from 'react-native';


const SData=[
  {
    id:'1',
    text:"I am learning Programming"
  },
  {
    id:'2',
    text:"I am learning React"
  },
  {
    id:'3',
    text:"I am learning React-Native"
  },
  {
    id:'4',
    text:"I am learning & Developing Projects"
  },
  {
    id:'5',
    text:"I am learning Programming in order to become Developer"
  },
]


export default function Fileone(){

  const renderItem=( {text} )=> (
    <Text style={styles.txt} text={text}/>
  )


return(
<View style={styles.container}>
  
{/* <StatusBar style="auto" /> */}
  <View>
  <FlatList 
    data={SData}
    renderItem={renderItem}
    keyExtractor={item => item.id}

  />

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