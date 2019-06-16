import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";



function Nav(props) {
  return (
    <Router>
      <Link to="/">Search</Link>
      <Link to="/saved">Saved</Link>
    </Router>
  );
}
export default Nav;
