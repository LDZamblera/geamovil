import React, { useEffect, useState } from 'react';

const TypingText = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const message = 'GEA LA PREPAGA QUE NECESITAS';
  const speed = 100; // Velocidad de escritura en milisegundos

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
      }, 2000); // Tiempo de pausa antes de reiniciar
      return () => clearTimeout(resetTimeout);
    }
  }, [index, message, speed]);

  return (
    <div style={typingStyle}>
      {text}
    </div>
  );
};

const typingStyle = {
  fontSize: '25px',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '20px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
};

export default TypingText;
