import "./App.css";

import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <News />
      </div>
    );
  }
}

export default App;
