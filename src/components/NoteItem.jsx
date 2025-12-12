// This component represents ONE NOTE in the list
function NoteItem({ note, number, onDelete }) {
    const noteStyle = note.color ? {
      background: `linear-gradient(135deg, ${note.color.start} 0%, ${note.color.end} 100%)`
    } : {};
    
    return (
      <div className="note-item" style={noteStyle}>
        <div className="note-content">
          <div className="note-header">
            <span className="note-number">#{number}</span>
            <span className="note-date">{note.date} • {note.timestamp}</span>
          </div>
          <div className="note-text">{note.content}</div>
        </div>
        <button className="delete-btn" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    );
  }
  
  export default NoteItem;
  