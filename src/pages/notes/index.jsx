// src/pages/notes/index.jsx
import { connect } from 'react-redux';
import { useState } from 'react';
import Meta from '../../components/Meta';
import NoteForm from '../../components/NoteForm';
import NoteList from '../../components/NoteList';

function NotesPage({ notes }) {
  const [editingNote, setEditingNote] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meta title="Notes" />

      <h1>Lesson 33: Реализация интерфейса с React и Redux</h1>
      <h2>Задача 1: Notes с Redux</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '480px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <h3>Новая заметка</h3>
        <NoteForm editingNote={editingNote} />
        {notes.length !== 0 && (
          <>
            <h3 style={{ marginTop: '1rem' }}>Список заметок</h3>
            <NoteList onEdit={setEditingNote} />
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes.data,
});

export default connect(mapStateToProps, null)(NotesPage);
