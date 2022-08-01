import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList} 
from 'react-native';


// const SData=[
//   {
//     key:'1',
//     text:"I am Developer."
//   },
//   {
//     key:'2',
//     text:"I am Developing Software on React."
//   },
//   {
//     key:'3',
//     text:"I am Developing Software on React-Native."
//   },
//   {
//     key:'3',
//     text:"I will learn Software Developement & SDLC."
//   },
// ];



export default function Fileone(){

  // const rItems=({text})=>{
  //   return(
  //     <Text style={styles.txt}> {text}</Text>  

  //   )
  // }

return(
<View style={styles.container}>
  
<StatusBar style="auto" />
  <View style={styles.M_text}>


{/* Trying Map function */}
    
{/* <FlatList
    data={SData}
    keyExtractor={item => item.id}

    renderItem={rItems}
  /> */}
  <Text style={styles.txt}> Hello </Text>
  


      {/* <Text style={styles.txt}> {props.items[0].word} </Text>
      <Text style={styles.txt}> {props.items[1].word} </Text>
      <Text style={styles.txt}> {props.items[2].word} </Text>
      <Text style={styles.txt}> {props.items[3].word} </Text> */}

     
  </View>
</View>


)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      // alignItems: 'strectch',
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