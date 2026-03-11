// src/pages/notes/index.jsx
import { connect } from 'react-redux';
import { addNoteAction, deleteNoteAction } from '../../redux/actions/notes';
import Meta from '../../components/Meta';
import NoteForm from '../../components/NoteForm';
import NoteList from '../../components/NoteList';

function NotesPage({ data, addNote, deleteNote }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meta title="Notes" />

      <h1>Lesson 33: Реализация интерфейса с React и Redux</h1>
      <h2>Задача 1: Notes с Redux</h2>

      <div style={{ maxWidth: '480px', width: '100%', margin: '0 auto' }}>
        <NoteForm onAdd={addNote} />
        <NoteList notes={data} onDelete={deleteNote} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
