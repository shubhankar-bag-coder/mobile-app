import React from "react";
import { View,StyleSheet,Text,FlatList } from "react-native";

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


const FileTwo=()=>{

return(
<View styles={styles.container}>

    <View styles={styles.M_Text}>
    <FlatList
        data={SData}
        
        renderItem={ ( {item} )=>{
            return <Text styles={styles.txt}>{item.text}</Text>
        }  }
    />
    </View>
</View>
)}

const styles=StyleSheet.create({
container:{
    flex:1,
    flexDirection:'column',
    backgroundColor: '#969590',
    justifyContent:'center',
    marginVertical:100,
    },
    M_Text:{
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
})

export default FileTwo;