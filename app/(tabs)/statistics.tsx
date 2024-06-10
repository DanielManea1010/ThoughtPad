import { Image, StyleSheet,View, Text} from 'react-native';

export default function StatScreen(){
  return(
    <View style={styles.mainView}>
      <View style={styles.firstText}>
        <Text style={styles.textContainer}>This is the Stats Screen!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer:{
    textAlign:'center'
  },
  mainView:{
    flex:1
  },
  firstText: {
    flex: 1,
    justifyContent: 'center', // Align on the vertical axis
    alignItems: 'center', // Align on the horizontal axis
  }
})