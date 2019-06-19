import React from 'react';
import { NavLink } from "react-router-dom";



function Nav(props) {
  // const activeClass = `shadow-md hover:shadow-none border bg-white border-teal-700 hover:bg-orange-100`;
  // const inactiveClass = `bg-white text-teal-700 px-3 hover:text-orange-500 rounded text-xl mr-10`;
  const activeClass = `text-xl text-teal-700 hover:text-orange-100`;
  const inactiveClass = `text-xl text-teal-700 px-3 hover:text-orange-500`;
  return (
    <div className="text-center">
      <NavLink to="/" exact={true} activeClassName={activeClass} className={inactiveClass}>Search</NavLink>
      <NavLink to="/saved" activeClassName={activeClass} className={inactiveClass}>Saved</NavLink>
    </div>
  );
}
export default Nav;
