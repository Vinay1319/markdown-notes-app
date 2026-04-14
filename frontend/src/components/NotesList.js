import axios from "axios";
import { FaPlus, FaEdit, FaTrash, FaStickyNote } from "react-icons/fa";

export default function NotesList({ notes, setSelected, fetchNotes, selected }) {
  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    fetchNotes();
  };

  return (
    <div className="panel left">
      <h3><FaStickyNote /> Notes</h3>

      <button onClick={() => setSelected(null)}>
        <FaPlus /> New Note
      </button>

      {notes.map((note) => (
        <div
          key={note.id}
          className={`note-item ${
            selected?.id === note.id ? "active" : ""
          }`}
        >
          <div onClick={() => setSelected(note)} style={{ cursor: "pointer" }}>
            <strong>{note.title}</strong>
          </div>

          <div style={{ marginTop: "5px" }}>
            <button onClick={() => setSelected(note)}>
              <FaEdit /> Edit
            </button>

            <button
              className="delete"
              onClick={() => deleteNote(note.id)}
            >
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}