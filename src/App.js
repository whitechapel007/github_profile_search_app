import React from "react";
import "./App.css";
// import useFetch from "./components/hooks/useFetch";
// import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleUser from "./components/users/SingleUser";
import About from "./pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

const App = () => {
  // const { users, loading } = useFetch(`https://api.github.com/users`);

  return (
    <div>
      <GithubState>
        <AlertState>
          <Router>
            <Navbar />
            <div className="container">
              {/* <Alert /> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/user/:login" component={SingleUser} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    </div>
  );
};

export default App;
