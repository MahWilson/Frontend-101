import { useState } from "react"
import "./App.css"
import InputBox from "./components/InputBox"
import NoteItem from "./components/NoteItem"

function App() {
  // notes = array storing all notes
  // setNotes = function to update the list
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // This function adds a note to the notes array
  function addNote(text) {
    const now = new Date();
    // Expanded color scheme with various colors
    const colorVariations = [
      // Yellows
      { start: '#ffeb3b', end: '#ffc107' },
      { start: '#fff9c4', end: '#ffeb3b' },
      { start: '#ffe082', end: '#ffc107' },
      // Blues
      { start: '#90caf9', end: '#42a5f5' },
      { start: '#bbdefb', end: '#64b5f6' },
      { start: '#81d4fa', end: '#29b6f6' },
      // Greens
      { start: '#a5d6a7', end: '#66bb6a' },
      { start: '#c8e6c9', end: '#81c784' },
      { start: '#b2dfdb', end: '#4db6ac' },
      // Pinks
      { start: '#f48fb1', end: '#ec407a' },
      { start: '#f8bbd0', end: '#f06292' },
      { start: '#fce4ec', end: '#f48fb1' },
      // Purples
      { start: '#ce93d8', end: '#ab47bc' },
      { start: '#e1bee7', end: '#ba68c8' },
      // Oranges
      { start: '#ffcc80', end: '#ffa726' },
      { start: '#ffe0b2', end: '#ffb74d' },
    ];
    const randomColor = colorVariations[Math.floor(Math.random() * colorVariations.length)];
    
    const newNote = {
      id: Date.now(),   // generate unique ID
      content: text,    // the text from the input box
      timestamp: now.toLocaleTimeString(), // e.g., "3:45:23 PM"
      date: now.toLocaleDateString(), // e.g., "12/25/2024"
      color: randomColor,
    };

    setNotes([...notes, newNote]); // Add the new note to the end of the array
  }
  
  // Filter notes based on search term
  const filteredNotes = notes.filter(note =>
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // This function deletes a note by its ID
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
    // Filter keeps notes NOT matching id
    // Mechanism: array.filter returns new array
  }

  return (
      <div className="app-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1>Notes App {notes.length > 0 && <span className="note-count">({notes.length})</span>}</h1>
          
          {/* Search bar */}
          {notes.length > 0 && (
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={{ marginBottom: "15px" }}
            />
          )}
          
          <InputBox onAdd={addNote}/>
          {/* connects InputBox to App */}
          
          {/* Empty state */}
          {notes.length === 0 && (
            <div className="empty-state">
              <p>No notes yet...</p>
              <p style={{ fontSize: "0.5em", marginTop: "10px", color: "#999" }}>
                Start writing your first note above!
              </p>
            </div>
          )}
          
          {/* Notes container with grid layout */}
          <div className="notes-container">
            {filteredNotes.map((note, filteredIndex) => {
              const originalIndex = notes.indexOf(note);
              return (
                <NoteItem 
                  key={note.id} 
                  note={note} 
                  number={originalIndex + 1} 
                  onDelete={deleteNote}
                />
              );
            })}
          </div>
          
          {notes.length > 0 && filteredNotes.length === 0 && (
            <div className="empty-state">
              <p>No notes found matching "{searchTerm}"</p>
            </div>
          )}
      </div>
  );
}

export default App;
