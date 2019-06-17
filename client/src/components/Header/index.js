import React from 'react';
// import Nav from '../Nav/index';
import Hero from '../Hero/';


function Header() {
  return (
    <Hero>
      <div className="p-4">
        <h1 className="text-4xl font-bold">Book Lovers Delite!</h1>
        <p className="text-xl">Search and Save!</p>
      </div>
    </Hero>
  );
}
export default Header;
