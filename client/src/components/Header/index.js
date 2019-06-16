import React from 'react';
import Nav from '../Nav/index';
import Hero from '../Hero/';



function Header() {
  return (
    <div className="header">
      <Hero className="">
        <h1>Book Lovers Delite!</h1>
        <p>Search and Save!</p>
        <Nav />
      </Hero>
    </div>
  );
}
export default Header;
