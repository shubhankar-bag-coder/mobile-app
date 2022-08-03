import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList, Button} 
from 'react-native';    


export default function Home(props){
return(
<View>
    <Text>Welcome {props.username} </Text>
        
</View>
)}

        
const styles = StyleSheet.create({

});

