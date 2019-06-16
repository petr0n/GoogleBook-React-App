import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Header from "./components/Header/";
import Search from './pages/Search'
import Saved from './pages/Saved';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Link to="/">Search</Link>
        <Link to="/saved">Saved</Link>
        <Route path="/" exact component={Search} />
        <Route path="/saved" component={Saved} />
      </Router>
    </div>
  );
}

export default App;
