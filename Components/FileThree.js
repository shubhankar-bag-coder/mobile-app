import React,{useState} from "react";
import { View,StyleSheet,Text,TouchableOpacity,FlatList} from "react-native";



const  FileThree=()=>{

    const [newColor, setNewColor] = useState([])
    const randomColor=()=>{
        const red=Math.floor(Math.random()*256);
        const blue=Math.floor(Math.random()*256);
        const green=Math.floor(Math.random()*256);
        
        // console.log(red);
        return `rgb( ${red}, ${blue}, ${green} )`;

    };
    console.log(newColor)
    

return(

<View style={styles.container}>
    <TouchableOpacity style={styles.buttonStyle}
        onPress={ ()=>
        {
            // Alert.alert(randomColor());
            setNewColor( [...newColor,randomColor() ] )
        }}>

        <Text styles={styles.textStyle}>Generate Colors</Text>
    </TouchableOpacity>

    <FlatList
        data={newColor}
        keyExtractor={ (key) => key }
        renderItem={ (item) =>{

        return(
            <View style={styles.imageContainer}>
            <Text styles={{
                backgroundColor:item,
                width:100,
                height:100,
                borderRadius:10,
            }}>{item}</Text>
            </View>
        )}}
        />

    {/* <View style={styles.imageContainer}>
        <Text styles={{
            backgroundColor:"rgb(200,222,245)",
            width:100,
            height:100,
            borderRadius:10,
        }}></Text>
    </View> */}
 
</View>
)
}

const styles = StyleSheet.create({
    container:{
        marginTop: 80,
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
        textTransform: "uppercase",
        fontSize:20
    }, imageContainer: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginVertical: 10, 
        paddingHorizontal: 30,
       
        }
        
        
    }
);

export default FileThree;