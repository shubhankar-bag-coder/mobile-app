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
    <TouchableOpacity style={styles.buttonStyle}
        onPress={ ()=>
        {
            Alert.alert(randomColor());
        }}>

        <Text styles={styles.textStyle}>Generate Colors</Text>
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
        // display: "flex",
        marginTop: 100,
    },buttonStyle: {
        display:'flex',
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#00boff", 
        position: "relative", 
        overflow: "hidden", 
        color: "#eee", 
        paddingVertical: 10, 
        paddingHorizontal: 15, 
        margin: 0, 
        borderRadius: 5,
    },textStyle: {
        color: "white",
        textTransform: "uppercase"
    }, imageContainer: {
        display:'flex',
        marginVertical: 50, 
        paddingHorizontal: 30, 
        }
        
        
    }
);

export default FileThree;