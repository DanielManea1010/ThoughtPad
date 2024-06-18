import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '@/hooks/ThemeContext';
import AppDarkTheme from '../../themes/appDarkTheme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNotes } from '@/hooks/NotesContext';

const NoteScreen = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const { addNote } = useNotes();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addNote(title, content, date);
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { borderBottomColor: theme.colors.border }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <TextInput
          style={[styles.titleInput, { color: theme.colors.text }]}
          placeholder="Add title here"
          placeholderTextColor={theme.colors.text}
          value={title}
          onChangeText={setTitle}
        />
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <MaterialIcons name="check" size={28} color="green" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={[styles.contentInput, { color: theme.colors.text }]}
        placeholder="Add your note here"
        placeholderTextColor={theme.colors.text}
        value={content}
        onChangeText={setContent}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 16,
  },
  backButton: {
    marginRight: 8,
  },
  titleInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  saveButton: {
    marginLeft: 8,
  },
  contentInput: {
    flex: 1,
    fontSize: 18,
    textAlignVertical: 'top',
  },
});

export default NoteScreen;