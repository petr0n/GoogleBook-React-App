import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from "./components/Header/";
import Search from './pages/Search'
import Saved from './pages/Saved';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container mx-auto">
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
