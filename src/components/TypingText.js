import React, { useEffect, useState } from 'react';

const TypingText = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true); // Define el estado 'blink'
  const message = 'GEA LA PREPAGA QUE NECESITAS';
  const speed = 170; // Velocidad de escritura en milisegundos

  useEffect(() => {
    if (index < message.length) {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      const resetTimeout = setTimeout(() => {
        setText(''); // Reinicia el texto después de una pausa
        setIndex(0);
      }, 1750); // Tiempo de pausa antes de reiniciar
      return () => clearTimeout(resetTimeout);
    }
  }, [index, message, speed]);

  // Cursor parpadeante
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div style={typingStyle}>
      {text}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span> {/* Cursor parpadeante */}
    </div>
  );
};

const typingStyle = {
  fontSize: '21px',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '15px',
  textShadow: '6px 6px 8px rgba(0, 0, 0, 0.8)',
  fontFamily: 'monospace', // Agrega una fuente tipo "teletipo"
};

export default TypingText;