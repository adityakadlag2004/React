import "./App.css";

import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <News country="us" pageSize="9" category="science"/>
      </div>
    );
  }
}

export default App;
