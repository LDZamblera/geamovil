// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 GEA</p>
    </footer>
  );
};

const footerStyle = {
  background: 'linear-gradient(to right, #085380, #FFFFFF, #FFA500)',
  color: '#085380',
  textAlign: 'center',
  padding: '0',
  position: 'relative',
  bottom: 0,
  border: '5px solid white',
  width: '100%',
  marginTop: '5rem',
  fontSize: '20px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Agrega sombreado
};
  

export default Footer;
