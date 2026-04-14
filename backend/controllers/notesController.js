const Notes = require("../models/notesModel");

exports.getNotes = (req, res) => {
  Notes.getAllNotes((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.createNote = (req, res) => {
  const { title, content } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  Notes.createNote(title, content, (err, note) => {
    if (err) return res.status(500).json(err);
    res.json(note);
  });
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  Notes.updateNote(id, title, content, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Updated" });
  });
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;

  Notes.deleteNote(id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deleted" });
  });
};