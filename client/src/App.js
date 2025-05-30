import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExpenseTable from './pages/ExpenseTable';
import ExpenseDetail from './pages/ExpenseDetail';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/expense-table" element={<ExpenseTable />} />
        <Route path="/expense/:id" element={<ExpenseDetail />} />
      </Route>
    </Routes>
  );
}

export default App;


// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import ExpenseTable from './pages/ExpenseTable';
// import ExpenseDetail from './pages/ExpenseDetail';

// function App() {
//   return (
//     <div>
//       <nav style={{ padding: '1rem', backgroundColor: '#2A2A3C' }}>
//         <Link to="/">Home</Link>
//         <Link to="/expense-table">Expense Table</Link>
//         <Link to="/expense/1">Expense Detail</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/expense-table" element={<ExpenseTable />} />
//         <Route path="/expense/:id" element={<ExpenseDetail />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
