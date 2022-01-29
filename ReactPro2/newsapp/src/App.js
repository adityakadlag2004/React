import "./App.css";

import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general"  country="us" pageSize={this.pageSize} category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" country="us" pageSize={this.pageSize} category="business" />
            </Route>
            <Route exact path="/general">
              <News key="general" country="us" pageSize={this.pageSize} category="general" />
            </Route>
            <Route exact path="/health">
              <News key="health" country="us" pageSize={this.pageSize} category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" country="us" pageSize={this.pageSize} category="science" />
            </Route>
            <Route exact path="/entertainment">
              <News
              key="entertainment"
                country="us"
                pageSize={this.pageSize}
                category="entertainment"
              />
            </Route>
            <Route exact path="/technology">
              <News
                country="us"
                pageSize={this.pageSize}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
