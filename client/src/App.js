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