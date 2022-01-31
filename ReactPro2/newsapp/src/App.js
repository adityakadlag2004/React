import "./App.css";

import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  apiKey=process.env.REACT_APP_NEWS_API_KEY;
  pageSize = 6;
  state = {
    progress: 0,
  };
  setProgress=(progress)=> {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} height={3}/>
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                country="us"
                pageSize={this.pageSize}
                category="general"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                country="us"
                pageSize={this.pageSize}
                category="business"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                key="general"
                country="us"
                pageSize={this.pageSize}
                category="general"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                country="us"
                pageSize={this.pageSize}
                category="health"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                country="us"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                category="science"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                country="us"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
                category="entertainment"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                country="us"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
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
