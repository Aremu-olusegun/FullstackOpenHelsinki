import { useState } from "react";
import Note from "./Note";
import "./index.css";
import notesService from "./services/notesServices";
import Notification from "./Notification";
import { useEffect } from "react";

const App = () => {
  const [newValue, setNewValue] = useState("");
  const [notes, setNotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
    notesService.getAll()
    .then((response) => {
      setNotes(response.data)
      console.log(response.data)
    })
  }, []);
  console.log(notes)

  const handleTextChange = (e) => {
    setNewValue(e.target.value);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    notesService.update(id, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    }).catch(error => {
      setErrorMessage(`Note '${note.content}' was already removed from server`)        
      setTimeout(() => {          
        setErrorMessage(null)      
      }, 5000)        
      setNotes(notes.filter(n => n.id !== id))
    })
  };

  function addNote(event) {
    event.preventDefault();
    const noteObject = {
      content: newValue,
      date: new Date(),
      important: Math.random() < 0.5,
    };
    notesService.create(noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewValue("");
    });
    setNewValue("");
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <form onSubmit={addNote}>
        <input value={newValue} onChange={handleTextChange} />
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      {notes.map((note) => (
        <Note
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          key={note.id}
        />
      ))}
      {/* <Note note={note}/> */}
    </div>
  );
};

export default App;

