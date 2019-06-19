import React from 'react';
// import Nav from '../Nav/index';
import Hero from '../Hero/';
import Nav from '../Nav';


function Header() {
  const bgColor = {
    backgroundColor: 'rgba(255, 255, 255, .9)'
  }
  return (
    <Hero>
      <div className="flex items-center p-2 w-full" style={bgColor}>
        <h1 className="text-4xl mr-10 text-teal-900 font-bold">Book Lovers Delite!</h1>
        <Nav />
      </div>
    </Hero>
  );
}
export default Header;
