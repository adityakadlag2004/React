import React from "react";

const NavState = (props) => {
  const [style, setStyle] = useState({ navcolor: "dark", bodyColor: "black" });
  const currentStyle = "default";
  return (
    <NoteContext.Provider value={{ style, setStyle, currentStyle }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NavState;
