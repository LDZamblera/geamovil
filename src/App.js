import React from 'react';
import './components/styles.css';
import Links from './components/Links';
import Footer from './components/footer';
import AtencionCliente from './components/AtencionCliente';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const links = [
  {
    title: 'Link 1',
    url: 'https://example.com/link1',
    description: 'Description for link 1',
  },
  {
    title: 'Link 2',
    url: 'https://example.com/link2',
    description: 'Description for link 2',
  },
  // Add more links as needed
];

const App = () => {
  return (
    <Router>
      <div>
        <Links links={links} />
        <Routes>
          <Route path="/atencion-al-cliente" element={<AtencionCliente />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
