import React,{useState} from "react";
import { View,StyleSheet,Text,TouchableOpacity,Alert} from "react-native";


const  FileThree=()=>{
    const randomColor=()=>{
        const red=Math.floor(Math.random()*256);
        const blue=Math.floor(Math.random()*256);
        const green=Math.floor(Math.random()*256);
        
        // console.log(red);
        return `rgb( ${red}, ${blue}, ${green} )`;

    };
    

return(

<View style={styles.container}>
    <TouchableOpacity onPress={ ()=>
        {
            Alert.alert(randomColor())
        }}>

        <Text styles={styles.Colo}>Generate Colors</Text>
    </TouchableOpacity>

    <View style={styles.imgcontainer}>
        <Text styles={{
            backgroundColor:'rgb(200,222,245)',
            width:100,
            height:100,
            borderRadius:10,
        }}></Text>
    </View>
 
</View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#5aa6f2',
        marginVertical:10,
        fontSize:20,
        textAlign:'center'
    },
    Colo:{
        backgroundColor:'#5aa6f2',

    },
    imgcontainer:{
        borderRadius:10,
        borderWidth:12,
        borderColor:'red',
        width:100,
    }
});

export default FileThree;