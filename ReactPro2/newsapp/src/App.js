import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const pageSize = 6;

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              country="us"
              pageSize={pageSize}
              category="general"
              apiKey={apiKey}
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              country="us"
              pageSize={pageSize}
              category="business"
              apiKey={apiKey}
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              key="general"
              country="us"
              pageSize={pageSize}
              category="general"
              apiKey={apiKey}
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              country="us"
              pageSize={pageSize}
              category="health"
              apiKey={apiKey}
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              country="us"
              apiKey={apiKey}
              pageSize={pageSize}
              category="science"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              country="us"
              pageSize={pageSize}
              apiKey={apiKey}
              category="entertainment"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              country="us"
              pageSize={pageSize}
              apiKey={apiKey}
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
