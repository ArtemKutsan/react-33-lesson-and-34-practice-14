// src/components/NoteForm/index.jsx
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function NoteForm({ onSubmit, editingNote }) {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (editingNote) {
      setValue('title', editingNote.title);
      setValue('text', editingNote.text);
    } else {
      reset();
    }
  }, [editingNote, setValue, reset]);

  const submitHandler = (data) => {
    const note = {
      id: editingNote?.id ?? crypto.randomUUID(),
      title: data.title,
      text: data.text,
    };

    onSubmit(note);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <input
        type="text"
        placeholder="Введите название заметки..."
        {...register('title', { required: true })}
      />
      <textarea placeholder="Введите текст заметки..." {...register('text', { required: true })} />
      <button type="submit">{editingNote ? 'Сохранить' : 'Добавить'}</button>
    </form>
  );
}

export default NoteForm;
