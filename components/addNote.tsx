import { Image, StyleSheet,View, Text} from 'react-native';

export default function NoteScreen(){
  return(
    <View style={styles.mainView}>
      <View style={styles.firstText}>
      <Text style={styles.textContainer}>Sticky Note Component, work in progress</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer:{
    alignItems:'center',
    justifyContent: 'center',
    flex:1
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