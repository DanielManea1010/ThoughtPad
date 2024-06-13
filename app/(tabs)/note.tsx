import { useContext } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { ThemeContext } from '../../hooks/ThemeContext';


export default function NoteScreen(){
  const { theme } = useContext(ThemeContext);

  return(
    <View style={[styles.mainView,{backgroundColor: theme.colors.background}]}>
      <View style={styles.firstText}>
        <Text style={[styles.textContainer, { color: theme.colors.text }]}>Sticky Note Component, work in progress</Text>
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