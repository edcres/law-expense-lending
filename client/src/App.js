import React, { useEffect, useState } from 'react';
import { getSalesforceData } from '../api/salesforce';

export default function SalesforceData() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getSalesforceData().then(setLeads);
  }, []);

  return (
    <div>
      <h2>Salesforce Leads</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            {lead.name} - {lead.status}
          </li>
        ))}
      </ul>
    </div>
  );
}


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
