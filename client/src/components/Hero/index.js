import React from 'react';


function Hero({ children }) {
  const heroStyle = {
    height: "250px"
  }
  return (
    <header className="container mx-auto mb-10 rounded-b-lg" style={heroStyle}>
      {children}
    </header>
  );
}
export default Hero;
