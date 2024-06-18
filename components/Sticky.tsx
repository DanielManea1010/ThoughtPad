import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StickyNoteProps {
  title: string;
  content: string;
  date: string;
}

const StickyNote: React.FC<StickyNoteProps> = ({ title, content, date }) => {
  return (
    <View style={styles.noteContainer}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
      <Text style={styles.content} numberOfLines={7} ellipsizeMode="tail">{content}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    width: 160,
    height: 190,
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    marginTop: 4,
  },
  date: {
    flex:1,
    alignSelf:'flex-end',
    justifyContent:'flex-end',
    fontSize: 12,
    marginTop: 8,
    top: 100,
    color: 'gray',
  },
});

export default StickyNote;
