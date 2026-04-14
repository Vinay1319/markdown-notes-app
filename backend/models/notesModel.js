const db = require("../db/database");

exports.getAllNotes = (callback) => {
  db.all("SELECT * FROM notes", [], callback);
};

exports.createNote = (title, content, callback) => {
  db.run(
    "INSERT INTO notes (title, content) VALUES (?, ?)",
    [title, content],
    function (err) {
      callback(err, { id: this.lastID, title, content });
    }
  );
};

exports.updateNote = (id, title, content, callback) => {
  db.run(
    "UPDATE notes SET title=?, content=? WHERE id=?",
    [title, content, id],
    callback
  );
};

exports.deleteNote = (id, callback) => {
  db.run("DELETE FROM notes WHERE id=?", [id], callback);
};