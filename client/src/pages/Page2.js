import React, { useEffect, useState } from 'react';

export default function Page2() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Simulated data — replace with real API later
    setExpenses([
      {
        id: 1,
        name: "E-043298",
        amount: 500,
        matter_display_name: "John vs Smith",
        funded_by_loc: false,
        created_at: "2024-12-01T12:00:00Z",
        status: "Requested",
        client_name: "John Doe",
        interest_accrued: null // will be calculated in the future
      },
      {
        id: 2,
        name: "E-043299",
        amount: 1000,
        matter_display_name: "Miller vs Co.",
        funded_by_loc: true,
        created_at: "2024-12-05T09:00:00Z",
        status: "Funded",
        client_name: "Susan Miller",
        interest_accrued: null
      }
    ]);
  }, []);

  return (
    <div>
      <h2>Expense Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc' }}>Client Name</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Status</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Interest Accrued</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Expense Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.client_name}</td>
              <td>{expense.status}</td>
              <td>{expense.interest_accrued ?? "-"}</td>
              <td>{new Date(expense.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
