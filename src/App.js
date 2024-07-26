// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FindMyPanditji from './components/FindMyPanditji';
import FindMyMaid from './components/FindMyMaid';
import './styles/header.css';
import './styles/footer.css';
import './styles/panditjistyle.css';
import './styles/maidstyles.css';

// const App = () => (
//   <Router>
//     <Header />
//     <main>
//       <Routes>
//         <Route path="/" element={<Authentication />} />
//         <Route path="/findmypanditji" element={<FindMyPanditji />} />
//         <Route path="/findmymaid" element={<FindMyMaid />} />
//       </Routes>
//     </main>
//     <Footer />
//   </Router>
// );

// export default App;

// import React from 'react';
// import FindMyPanditji from './components/FindMyPanditji';
import Authentication from './components/Authorization';

const App = () => {
    return (
        <div>
            <h1>Welcome to Find My Panditji</h1>
            <Authentication />
            <FindMyPanditji />
        </div>
    );
};
export default App;
