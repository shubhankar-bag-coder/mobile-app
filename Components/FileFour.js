import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList} 
from 'react-native';

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-08-02&' +
          'sortBy=popularity&' +
          'apiKey=222e2b78af1845709eaa8b1ca543bcc3';
          
var req = new Request(url);


export default function FileFour(){

   let getUserData= async ()=>{
        try {
            let response= await fetch(req);
            let data=await response.json();
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    };
    // fetch("https://thapatechnical.github.io/userapiUsers.json");
    // fetch(req);

    useEffect( () => { 
        getUserData(); 
    }, [ ] );



    

return(
<View styles={styles.container}>
    <Text>Hello</Text>

</View>
)}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection:'column',
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5',
    //   marginTop:100,
    },
    
});

