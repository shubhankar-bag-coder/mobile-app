import Fileone from "./Components/Fileone";
import { View} 
from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import FlileTwo from "./Components/FlileTwo";
import FileThree from "./Components/FileThree";
import FileFour from "./Components/FileFour";
import Contact from "./Components/Contact";


export default function App() {
  return (
    <View >
      <Fileone />
      {/* <FlileTwo/> */}
      {/* <FileThree/> */}
      {/* <FileFour/> */}
      <Contact/>
    </View>
  );
}

