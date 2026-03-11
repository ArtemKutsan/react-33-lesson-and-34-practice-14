// src/components/NoteList/index.jsx
import NoteItem from '../NoteItem';

function NoteList({ notes, onDelete }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '1rem',
        backgroundColor: '#fafafa',
      }}
    >
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
