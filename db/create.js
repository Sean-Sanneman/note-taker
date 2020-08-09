const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Create {
  //create a function that reads a file
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  //create function to write file
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  //create function to grab notes
  getNote() {
    return this.read().then((notes) => {
      let notesArr;
      try {
        notesArr = [].concat(JSON.parse(notes));
      } catch (err) {
        notesArr = [];
      }
      return notesArr;
    });
  }

  //create function to add notes
  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      id: note.id,
    };
    return this.getNote()
      .then((notes) => {
        return [...notes, newNote];
      })
      .then((newNoteArr) => {
        this.write(newNoteArr);
      })
      .then(() => newNote);
  }
  deleteNote(id) {
    return this.getNote()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Create();
