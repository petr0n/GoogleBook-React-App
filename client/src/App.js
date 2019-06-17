import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.css';
import Header from "./components/Header/";
import Search from './pages/Search'
import Saved from './pages/Saved';


function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Router>
          <div className="w-1/2 mx-auto my-10 text-center">
            <NavLink to="/" exact={true} activeClassName="rounded px-2 py-1 border border-teal-700 hover:bg-orange-100" className="mr-10 text-teal-700 hover:text-orange-500">Search</NavLink>
            <NavLink to="/saved" activeClassName="rounded px-2 py-1 border border-teal-700 hover:bg-orange-100" className="text-teal-700 hover:text-orange-500">Saved</NavLink>
          </div>
          <Route path="/" exact component={Search} />
          <Route path="/saved" component={Saved} />
        </Router>
      </div>
    </div>
  );
}

export default App;
