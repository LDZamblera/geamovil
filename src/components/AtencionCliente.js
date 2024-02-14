// AtencionCliente.js

import React from 'react';

const AtencionCliente = () => {
  return (
    <div className="atencion-cliente-container">
      <h2>Atencion al cliente GEA</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">&#9993;</span>
          <p>info@geanet.com.ar</p>
        </div>
        <div className="contact-item">
          <span className="contact-icon">&#x1F4F1;</span>
          <p>3515212168</p>
        </div>
        <div className="contact-item">
          <span className="contact-icon">&#9742;</span>
          <p>08101222432</p>
        </div>
      </div>
    </div>
  );
};

export default AtencionCliente;
