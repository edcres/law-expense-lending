import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SalesforceData from './pages/SalesforceData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/salesforce" element={<SalesforceData />} />
    </Routes>
  );
}

export default App;


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
