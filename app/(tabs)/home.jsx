import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import AddNote from '@/components/AddNoteButton';
import { ThemeContext } from '@/hooks/ThemeContext';
import AppDarkTheme from '../../themes/appDarkTheme';
import SwitchButton from '../../components/SwitchThemeButton';
import StickyNote from '../../components/Sticky';
import { useNotes } from '@/hooks/NotesContext';

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext);
  const { notes } = useNotes();
  const darkMode = theme === AppDarkTheme;
  console.log('Rendering HomeScreen, darkMode:', darkMode);


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header,{borderBottomWidth:1, borderBottomColor:'grey'} ]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Thought Pad</Text>
        <View style={styles.switchContainer}>
          <Text style={[styles.themeText, { color: theme.colors.text }]}>
           {darkMode ? 'Dark Theme' : 'Light Theme'}
          </Text>
          <SwitchButton />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.notesContainer}>
      {notes.map((note, index) => (
          <StickyNote key={index} title={note.title} content={note.content} date={note.date} />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AddNote />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    borderRadius: 50,
    bottom: 5,
    right: 12,
  },
  text: {
    textAlign: 'center',
  },
  themeText: {
    marginRight: 8,
  },
  notesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
