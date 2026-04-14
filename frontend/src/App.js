import React, { useEffect, useState } from "react";
import axios from "axios";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import NotesList from "./components/NotesList";
import "./App.css";
import { FaStickyNote, FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };

  useEffect(() => {
  if (selected) {
    setTitle(selected.title || "");
    setContent(selected.content || "");
  } else {
    setTitle("");
    setContent("");
  }
}, [selected]);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header"> <FaStickyNote /> Markdown Notes App 
      <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <div className="container">
        <NotesList
          notes={notes}
          setSelected={setSelected}
          fetchNotes={fetchNotes}
          selected={selected}
        />

        <Editor
  title={title}
  setTitle={setTitle}
  content={content}
  setContent={setContent}
  selected={selected}
  fetchNotes={fetchNotes}
/>

<Preview content={content} />
      </div>
    </div>
  );
}

export default App;