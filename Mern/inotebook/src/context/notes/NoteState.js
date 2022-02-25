import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "Harry",
    class: "5b",
  };
  const [state, setState] = useState(s1);

  return (
    <NoteContext.Provider value={{ state: s1 }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
