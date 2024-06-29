import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddNote(props) {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");



  // setNote(noteData);
  // const getNote = (e) => {
  //   console.log(e.target.value);
  //   noteData.note = e.target.value;
  //   console.log(noteData);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = {
      id:Math.random(),
      title:title,
      note: note,
    };
    
    if (title.length < 1 || note.length < 1) {
      alert("please enter all the fields");
    } else {
      props.onNotesAdded(noteData);
      setNote('');
      setTitle('');

    }
  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" placeholder="Enter Title"
        value={title}
      onChange={(e)=>setTitle(e.target.value) }
      /><br />
      <textarea
        type="text"
        name=""
        id=""
        value={note}
        placeholder="Enter your note here"
        onChange={(e)=>setNote(e.target.value)}
      />
      <button type="submit" className="btn btn-info">
        Save note
        </button>
        </form>
    </>
  );
}
// console.log(noteData)
