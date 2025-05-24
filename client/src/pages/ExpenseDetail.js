import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getExpenseById } from '../api/salesforce';
import colors from '../styles/theme';

export default function ExpenseDetail() {
  const { id } = useParams();
  const [expense, setExpense] = useState(null);
  const [statusHistory, setStatusHistory] = useState([]);
  const [interestData, setInterestData] = useState([]);

  useEffect(() => {
    getExpenseById(id).then((data) => {
      if (data) {
        setExpense(data);

        // Simulated status history based on dates
        setStatusHistory([
          { stage: "Pending", date: "2024-12-01" },
          { stage: "Marked for Request", date: "2024-12-02" },
          { stage: "Requested", date: "2024-12-04" },
        ]);

        // Simulated daily interest change
        setInterestData([
          { date: "2024-12-01", change: 0.00 },
          { date: "2024-12-02", change: 1.25 },
          { date: "2024-12-03", change: 2.18 },
          { date: "2024-12-04", change: 3.42 }
        ]);
      }
    });
  }, [id]);

  if (!expense) return <div style={{ color: colors.textPrimary }}>Loading...</div>;

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <h2>Expense Detail: {expense.name}</h2>
      <h4>Client: {expense.matter_display_name}</h4>
      <h4>Status: {expense.status}</h4>

      <section style={{ marginTop: '2rem' }}>
        <h3>Status History</h3>
        <ul>
          {statusHistory.map((entry, idx) => (
            <li key={idx}>
              {entry.stage} on {new Date(entry.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Interest Accrued</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Date</th>
              <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Change ($)</th>
            </tr>
          </thead>
          <tbody>
            {interestData.map((entry, idx) => (
              <tr key={idx}>
                <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>
                  {new Date(entry.date).toLocaleDateString()}
                </td>
                <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>
                  {entry.change.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
