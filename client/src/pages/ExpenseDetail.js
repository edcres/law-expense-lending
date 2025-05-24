import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import colors from '../styles/theme';

export default function ExpenseDetail() {
  const { id } = useParams();
  const [expense, setExpense] = useState(null);
  const [history, setHistory] = useState([]);
  const [interestData, setInterestData] = useState([]);

  useEffect(() => {
    setExpense({
      id,
      name: "E-043298",
      client_name: "John Doe",
      status: "Requested"
    });

    setHistory([
      { stage: "Pending", date: "2024-12-01" },
      { stage: "Marked for Request", date: "2024-12-03" },
      { stage: "Requested", date: "2024-12-05" }
    ]);

    setInterestData([
      { date: "2024-12-01", change: 0.0 },
      { date: "2024-12-02", change: 1.2 },
      { date: "2024-12-03", change: 2.4 }
    ]);
  }, [id]);

  if (!expense) return <div style={{ color: 'white' }}>Loading...</div>;

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <h2>Expense Details: {expense.name}</h2>
      <h3>Client: {expense.client_name}</h3>

      <h4>Status History</h4>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.stage} on {new Date(entry.date).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <h4>Interest Accrued</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Date</th>
            <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Interest Change ($)</th>
          </tr>
        </thead>
        <tbody>
          {interestData.map((row, index) => (
            <tr key={index}>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>{new Date(row.date).toLocaleDateString()}</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>{row.change.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
