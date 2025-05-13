import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/page2" style={{ marginRight: '1rem' }}>Page 2</Link>
        <Link to="/page3">Page 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
