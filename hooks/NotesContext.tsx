import React, { createContext, useState, useContext, ReactNode } from 'react';

type Note = {
  title: string;
  content: string;
  date: string;
};

type NotesContextType = {
  notes: Note[];
  addNote: (title: string, content: string, date: string) => void;
};

type NotesProviderProps = {
  children: ReactNode;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (title: string, content: string, date: string) => {
    setNotes((prevNotes) => [...prevNotes, { title, content, date }]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
