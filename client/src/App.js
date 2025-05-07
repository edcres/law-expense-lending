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


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import SalesforceData from './pages/SalesforceData';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/salesforce" element={<SalesforceData />} />
//       <Route path="*" element={<div>Page not found</div>} />
//     </Routes>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SalesforceData from './pages/SalesforceData';
// import Home from './pages/Home';

// function App() {
//   return (
//     <Router>
//       <div>
//         <header>
//           <h1>My React App</h1>
//           {/* Add navigation if you want */}
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/salesforce" element={<SalesforceData />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
