// src/pages/notes/index.jsx
import { connect } from 'react-redux';
import { addNoteAction, deleteNoteAction, updateNoteAction } from '../../redux/actions/notes';
import Meta from '../../components/Meta';
import NoteForm from '../../components/NoteForm';
import NoteList from '../../components/NoteList';
import { useState } from 'react';

function NotesPage({ data, addNote, deleteNote, updateNote }) {
  const [editingNote, setEditingNote] = useState(null);

  const handleAdd = (note) => {
    if (editingNote) {
      updateNote(note);
    } else {
      addNote(note);
    }

    setEditingNote(null);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meta title="Notes" />

      <h1>Lesson 33: Реализация интерфейса с React и Redux</h1>
      <h2>Задача 1: Notes с Redux</h2>

      <div style={{ maxWidth: '480px', width: '100%', margin: '0 auto' }}>
        <NoteForm onSubmit={handleAdd} editingNote={editingNote} />
        <NoteList notes={data} onDelete={deleteNote} onEdit={handleEdit} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.notes.data,
});

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNoteAction(note)),
  deleteNote: (id) => dispatch(deleteNoteAction(id)),
  updateNote: (note) => dispatch(updateNoteAction(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
