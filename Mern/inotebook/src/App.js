import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import AddNote from "./components/AddNote";
import FullView from "./components/FullView";
import Login from "./components/authcomponents/Login";
import Signup from "./components/authcomponents/Signup";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="Alert " />
          <div className="container">
            <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/addNote" element={<AddNote />} />
              <Route exact path="/fullview" element={<FullView />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
