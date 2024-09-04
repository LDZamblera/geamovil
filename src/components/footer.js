import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el icono de WhatsApp

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>&copy; 2024 GEA</p>
      <a 
        href="https://wa.me/5493517511993" // Número de WhatsApp actualizado
        target="_blank"
        rel="noopener noreferrer"
        style={whatsappButtonStyle}
      >
        <FaWhatsapp style={iconStyle} /> Mas info
      </a>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to right, #085380, #FFFFFF, #FFA500)',
  color: '#085380',
  textAlign: 'center',
  padding: '10px',
  position: 'relative',
  bottom: 0,
  border: '1px solid white',
  width: '100%',
  marginTop: '5rem',
  fontSize: '20px',
  fontWeight: 'bold',
  textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)',
};

const textStyle = {
  marginRight: '20px', // Espacio entre el texto y el botón
};

const whatsappButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: '#25D366',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '20px',
  textDecoration: 'none',
  fontSize: '18px',
  transition: 'background-color 0.6s ease, transform 0.3s ease', // Añadir transición de color y transformación
};



const iconStyle = {
  marginRight: '10px',
  fontSize: '22px',
};

export default Footer;
