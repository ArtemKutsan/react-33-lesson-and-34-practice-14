// src/components/NoteList/index.jsx
import { connect } from 'react-redux';
import { deleteNoteAction } from '../../redux/actions/notes';
import NoteItem from '../NoteItem';

function NoteList({ notes, deleteNote, onEdit }) {
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
        <NoteItem key={note.id} note={note} onDelete={deleteNote} onEdit={onEdit} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes.data,
});

const mapDispatchToProps = (dispatch) => ({
  deleteNote: (id) => dispatch(deleteNoteAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
