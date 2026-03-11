// src/components/NoteForm/index.jsx
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addNoteAction, updateNoteAction } from '../../redux/actions/notes';
import { useEffect } from 'react';

function NoteForm({ editingNote, addNote, updateNote }) {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (editingNote) {
      setValue('title', editingNote.title);
      setValue('text', editingNote.text);
    } else {
      reset();
    }
  }, [editingNote]);

  const submitHandler = (data) => {
    const note = {
      id: editingNote?.id ?? crypto.randomUUID(),
      title: data.title,
      text: data.text,
    };

    if (editingNote) updateNote(note);
    else addNote(note);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <input type="text" {...register('title')} />
      <textarea {...register('text')} />
      <button>{editingNote ? 'Сохранить' : 'Добавить'}</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNoteAction(note)),
  updateNote: (note) => dispatch(updateNoteAction(note)),
});

export default connect(null, mapDispatchToProps)(NoteForm);
