import { Image, StyleSheet,View, Text} from 'react-native';

export default function StatScreen(){
  return(
    <View style={syles.mainView}>
      <Text style={syles.textContainer}>This is the Stats Screen!</Text>
    </View>
  )
}

const syles = StyleSheet.create({
  textContainer:{
    alignItems:'center',
    justifyContent: 'center',
    flex:1
  },
  mainView:{
    flex:1
  }
})