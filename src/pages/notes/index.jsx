import Meta from '../../components/Meta';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addNoteAction, deleteNoteAction } from '../../redux/actions/notes';

function NotesPage({ data, addNote, deleteNote }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ title }) => {
    const newNote = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    addNote(newNote);
    reset();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Meta title="Note" />

      <h1>Lesson 33: Реализация интерфейса с React и Redux </h1>

      <h2>Задача 1: Notes с Redux</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Введите заметку..."
          {...register('title', { required: true })}
        />
        <button type="submit">Добавить</button>
      </form>

      <div style={{ marginTop: '1rem' }}>
        {data.map((note) => (
          <div key={note.id}>
            <p>
              {note.title}{' '}
              <span onClick={() => deleteNote(note.id)} style={{ color: 'red', cursor: 'pointer' }}>
                x
              </span>
            </p>
          </div>
        ))}
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
