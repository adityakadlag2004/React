import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "620cd2d3dada74s39e4a467d3b8",
      user: "62089658066a193fb5a5b085",
      title: "My Title jshdgyasgd sdghasg",
      description: "this is description1",
      tag: "personal",
      date: "2022-02-16T10:32:51.875Z",
      __v: 0,
    },
    {
      _id: "620cd32f4fad5d6293f97bc9d8",
      user: "62089658066a193fb5a5b085",
      title: "My Title sdasd",
      description: "this is description2",
      tag: "personal",
      date: "2022-02-16T10:34:23.345Z",
      __v: 0,
    },
    {
      _id: "620cd32ffas5d6293f5497bc9d8",
      user: "62089658066a193fb5a5b085",
      title: "My Title sdasd",
      description: "this is description2",
      tag: "personal",
      date: "2022-02-16T10:34:23.345Z",
      __v: 0,
    },
    {
      _id: "620cd32ff54a5dd6293f97bc9d8",
      user: "62089658066a193fb5a5b085",
      title: "My Title sdasd",
      description: "this is description2",
      tag: "personal",
      date: "2022-02-16T10:34:23.345Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  //Add Note
  const addNote = (title, description, tag) => {
    //TODO : API CALL
    let note = {
      _id: "620cd32ff54a5dd6293df97bc9d8",
      user: "62089658066a193fb5a5b085",
      title: title,
      description: description,
      tag: tag,
      date: "2022-02-16T10:34:23.345Z",
      __v: 0,
    };
    console.log("Adding New Note");
    setNotes(notes.concat(note));
  };
  //Edit Note
  const editNote = (id) => {};
  //Delete Note
  const deleteNote = (id) => {};


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
