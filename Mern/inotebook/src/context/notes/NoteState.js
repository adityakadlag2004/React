import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "620cd2d3dada79e4a467d3b8",
      user: "62089658066a193fb5a5b085",
      title: "My Title jshdgyasgd sdghasg",
      description: "this is description1",
      tag: "personal",
      date: "2022-02-16T10:32:51.875Z",
      __v: 0,
    },
    {
      _id: "620cd32ffa5d6293f97bc9d8",
      user: "62089658066a193fb5a5b085",
      title: "My Title sdasd",
      description: "this is description2",
      tag: "personal",
      date: "2022-02-16T10:34:23.345Z",
      __v: 0,
    },
    {
      _id: "620cd32ffa5d6293f97bc9d8",
      user: "62089658066a193fb5a5b085",
      title: "My Title sdasd",
      description: "this is description2",
      tag: "personal",
      date: "2022-02-16T10:34:23.345Z",
      __v: 0,
    },
    {
      _id: "620cd32ffa5d6293f97bc9d8",
      user: "62089658066a193fb5a5b085",
      title: "My Title sdasd",
      description: "this is description2",
      tag: "personal",
      date: "2022-02-16T10:34:23.345Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
