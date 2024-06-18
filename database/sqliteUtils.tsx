import * as SQLite from 'expo-sqlite';

interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

// Funcția pentru inițializarea bazei de date
export const initDB = async (): Promise<void> => {
  const db = await SQLite.openDatabaseAsync('notes.db');
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      date TEXT NOT NULL
    );
  `);
  console.log('Table created successfully');
};

// Funcția pentru a obține notele din baza de date
export const getNotes = async (): Promise<Note[]> => {
  const db = await SQLite.openDatabaseAsync('notes.db');
  const allRows = await db.getAllAsync('SELECT * FROM notes');
  return allRows as Note[];
};