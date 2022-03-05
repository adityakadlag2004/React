import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import AddNote from "./components/AddNote";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="Alert "/>
          <div className="container">
            <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/addNote" element={<AddNote />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
