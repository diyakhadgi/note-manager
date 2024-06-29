// import { useState } from "react";
import { useState } from "react";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Note from "./components/Note";


function App() {
  const getNote = JSON.parse(localStorage.getItem('Notes'));
  const [notes, setNotes] = useState(getNote ? getNote : []);
  const addNotes = (note) => {
    const allNotes = [...notes, note];
    setNotes(allNotes)
    localStorage.setItem("Notes", JSON.stringify(allNotes));
    console.log("New notes Added");
  }
  return (
    <>
      <Navbar/>
      <AddNote onNotesAdded={addNotes} />
      <br />
      <div><h1>Your NOtes</h1>
      {notes.map((data) => (
        <Note key={data.id} data={data} />
      ))}
        </div>
    </>
  )
}

export default App
