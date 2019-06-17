import React from 'react';


function Hero({ children }) {
  const heroStyle = {
    height: "250px"
  }
  return (
    <header className="container mx-auto mb-2 flex items-end rounded-b-lg" style={heroStyle}>
      {children}
    </header>
  );
}
export default Hero;
