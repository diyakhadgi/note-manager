import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddNote() {
  
// const [note, setNote] = useState("");
const noteData= {
  note : ""
}
 

  // setNote(noteData);
  const getNote = (e) => {
    console.log(e.target.value)
    noteData.note = e.target.value;
    console.log(noteData)
  }

  return (

    <>
      <textarea type="text" name="" id="" placeholder="Enter your note here" onChange={getNote} />
      <button type="button" className="btn btn-info" onClick={(e) => {
        const example = localStorage.setItem('notes', JSON.stringify(noteData))
        console.log(localStorage.getItem(notes))
      }}
      >
        Info
      </button>
    </>
  );
}
// console.log(noteData)
