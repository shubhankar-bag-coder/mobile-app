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

    let [Data, setData] = useState('');
    
    let [isLoaded, setisLoaded] = useState(true)

    useEffect( () => { 
        getUserData(); 
    }, [ ] );


   let getUserData= async ()=>{
        try {
            let response= await fetch(req); 
            let data=await response.json();
            console.log(data.articles);
            setData(data);
            setisLoaded(false);
            
        } catch (error) {
            console.log(error);
        }
    };

return(
<View styles={styles.container}>
    
    {/* Flatlist  Add data remaining Data Data.articles Data. */}

    <FlatList
            data={Data}
            keyExtractor={ ( id ) => id }
            renderItem={ ( { item } ) => {
                return(
                <View>
                        <Text> {item.title} </Text>
                        <Text> {item.author}</Text>
                </View>
                )
            } }
    /> 

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

