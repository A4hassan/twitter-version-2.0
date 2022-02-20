import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home/Home";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
