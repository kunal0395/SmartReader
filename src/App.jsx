import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pdfcontain from './components/Pdfcontain';
import PdfViewer from './components/PdfViewer';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy';

function App() {
  const [pdfFile, setPdfFile] = useState(null);

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Pdfcontain setPdfFile={setPdfFile} />} />
          <Route path="/pdf-viewer" element={<PdfViewer pdfFile={pdfFile} />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/privacy" element={<Privacy />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
