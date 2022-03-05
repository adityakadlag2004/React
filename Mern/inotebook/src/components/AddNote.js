import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

import Notes from "./Notes";
const AddNote = () => {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const context = useContext(noteContext);
  const { addNote } = context;
  const handleClick = (e) => {
    e.preventDeafult();
    addNote(note);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h3 className="my-3">Add a Note</h3>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="titleHelp"
              onChange={onChange}
            />
   
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="tag"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              tag
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
        <Notes />
      </div>
    </div>
  );
};

export default AddNote;
