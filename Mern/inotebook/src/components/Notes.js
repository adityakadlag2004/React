import React, { useContext } from "react";
import contextIn from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(contextIn);
  const { notes, setNotes } = context;

  return (
    <div className="row my-3">
      <h3 className="my-3">Your Notes</h3>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
};

export default Notes;