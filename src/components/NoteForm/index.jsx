// src/components/NoteForm/index.jsx
import { useForm } from 'react-hook-form';

function NoteForm({ onAdd }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ title, text }) => {
    onAdd({
      id: crypto.randomUUID(),
      title,
      text,
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <input
        type="text"
        placeholder="Введите название заметки..."
        {...register('title', { required: true })}
      />
      <textarea placeholder="Введите текст заметки..." {...register('text', { required: true })} />
      <button type="submit" className="button-primary" style={{ margin: '0 auto' }}>
        'Добавить'
      </button>
    </form>
  );
}

export default NoteForm;
