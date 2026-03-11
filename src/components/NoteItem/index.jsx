// src/components/NoteItem/index.jsx
function NoteItem({ note, onDelete }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        border: '1px solid #c5cae0',
        borderRadius: '1rem',
        padding: '1rem',
      }}
    >
      <h4>{note.title}</h4>
      <p>{note.text}</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => onEdit(note.id)}>Редактировать</button>
        <button onClick={() => onDelete(note.id)} style={{ color: 'red' }}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
