import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FindMyMaid from './components/FindMyMaid';
import FindMyPanditji from './components/FindMyPanditji';
import './styles/App.css';
import Footer from './components/Footer';
import './styles/header.css';
import './styles/footer.css';
import './styles/panditjistyle.css';
import './styles/maidstyles.css';
import RegisterPanditji from './components/PanditjiRegister';

const App = () =>  {
  return (
    <div className="App">
    <Router>
      <Header />
      <RegisterPanditji />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findmypanditji" element={<FindMyPanditji />} />
        <Route path="/findmymaid" element={<FindMyMaid />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/findmypanditji" />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;

