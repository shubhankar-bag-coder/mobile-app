import Fileone from "./Components/Fileone";

// Bootstrap doesnt work we use Flexbox
import { View, StyleSheet, Text,Image, TouchableOpacity} 
from 'react-native';

const Data=[
  {
    key:'1',
    word:"I am Developer"
  },
  {
    key:'2',
    word:"I am Developing Software on React"
  },
  {
    key:'3',
    word:"I am Developing Software on React-Native"
  },
  {
    key:'3',
    word:"I will learn Software Developement & SDLC"
  },
]

export default function App() {
  return (
    <View >
      <Fileone items={Data} />
    </View>
  );
}


