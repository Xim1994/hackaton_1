import React from 'react';
import logo from './logo.svg';
import './App.css';
import CovidTable from './Components/Table/Table';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <NavBar />
        <div>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/table">
              <CovidTable />
            </Route>
            <Route path="/navBar">
              <NavBar />
            </Route>
            <Route path="/">

            </Route>
          </Switch>
        </div>
      </Router>

  );
}



export default App;
