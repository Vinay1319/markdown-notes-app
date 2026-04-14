import axios from "axios";
import { useState } from "react";
import { FaPen } from "react-icons/fa";

export default function Editor({
  title,
  setTitle,
  content,
  setContent,
  selected,
  fetchNotes
}) {
  const [error, setError] = useState("");

  const saveNote = async () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setError("");

    if (selected) {
      await axios.put(`http://localhost:5000/notes/${selected.id}`, {
        title,
        content,
      });
    } else {
      await axios.post("http://localhost:5000/notes", {
        title,
        content,
      });
    }

    fetchNotes();
  };

  return (
    <div className="panel middle">
      <h3><FaPen /> Editor</h3>

      <input
        placeholder="Note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <textarea
        placeholder="Write markdown..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={saveNote}>Save</button>
    </div>
  );
}