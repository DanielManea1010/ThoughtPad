import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '@/hooks/ThemeContext';
import AppDarkTheme from '../../themes/appDarkTheme';
import { Ionicons } from '@expo/vector-icons';  // Folosim Ionicons pentru iconița săgeată

const NoteScreen = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === AppDarkTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { borderBottomColor: theme.colors.border }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.colors.text }]}>Add Note</Text>
      </View>
      <Text style={[styles.content, { color: theme.colors.text }]}>Your Notes Content</Text>
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
    padding: 10,
    marginBottom: 16,
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  content: {
    fontSize: 18,
  },
});

export default NoteScreen;
