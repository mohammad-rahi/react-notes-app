import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css'
import NotesList from './NoteApp/NotesList';
import Search from './NoteApp/Search';
import Header from './NoteApp/Header';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react_notes_app_data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('react_notes_app_data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]

    setNotes(newNotes);

  };

  const deleteNote = id => {
    const newNote = notes.filter(note => note.id !== id);
    setNotes(newNote);
  };

  return (
    <div className={`notes_wrapper ${darkMode && "dark_mode"}`}>
      <div className='container'>
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLocaleLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App