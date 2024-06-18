import * as SQLite from 'expo-sqlite';

let db: any;

const setupDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync('notes.db');
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        date TEXT NOT NULL
      );
    `);
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error setting up database', error);
  }
};

const addNoteToDB = async (title: string, content: string) => {
  const date = new Date().toLocaleString();
  try {
    await db.runAsync('INSERT INTO notes (title, content, date) VALUES (?, ?, ?)', [title, content, date]);
    console.log('Note added successfully!');
  } catch (error) {
    console.error('Error adding note', error);
  }
};

const getNotesFromDB = async (setNotes: React.Dispatch<React.SetStateAction<any[]>>) => {
  try {
    const notes = await db.getAllAsync('SELECT * FROM notes');
    setNotes(notes);
  } catch (error) {
    console.error('Error fetching notes', error);
  }
};

const updateNoteInDB = async (id: number, title: string, content: string) => {
  const date = new Date().toLocaleString();
  try {
    await db.runAsync('UPDATE notes SET title = ?, content = ?, date = ? WHERE id = ?', [title, content, date, id]);
    console.log('Note updated successfully!');
  } catch (error) {
    console.error('Error updating note', error);
  }
};

const deleteNoteFromDB = async (id: number) => {
  try {
    await db.runAsync('DELETE FROM notes WHERE id = ?', [id]);
    console.log('Note deleted successfully!');
  } catch (error) {
    console.error('Error deleting note', error);
  }
};

export { setupDatabase, addNoteToDB, getNotesFromDB, updateNoteInDB, deleteNoteFromDB };
