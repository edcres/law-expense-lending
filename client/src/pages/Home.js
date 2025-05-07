import React, { useEffect, useState } from 'react';
import ExpenseList from '../components/ExpenseList';

const statusOrder = [
  "Pending",
  "Marked for Request",
  "Requested",
  "Funded",
  "Paid Off"
];

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Simulate API call
    setExpenses([
      {
        id: 1,
        name: "E-043298",
        amount: 500,
        matter_display_name: "John vs Smith",
        funded_by_loc: false,
        created_at: "2024-12-01T12:00:00Z",
        status: "Pending"
      },
      // Add more mock data if needed
    ]);
  }, []);

  const moveToNextStatus = (id) => {
    setExpenses((prev) =>
      prev.map((e) => {
        if (e.id === id) {
          const nextIndex = statusOrder.indexOf(e.status) + 1;
          if (nextIndex < statusOrder.length) {
            return { ...e, status: statusOrder[nextIndex] };
          }
        }
        return e;
      })
    );
  };

  return (
    <div>
      <h2>Expense Dashboard</h2>
      {statusOrder.map((status) => (
        <ExpenseList
          key={status}
          status={status}
          expenses={expenses.filter((e) => e.status === status)}
          onAdvance={moveToNextStatus}
        />
      ))}
    </div>
  );
}


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/salesforce');
//   };

//   const items = [
//     { id: 1, title: 'Review Salesforce API docs' },
//     { id: 2, title: 'Connect frontend to backend' },
//     { id: 3, title: 'Style Home page' },
//   ];

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <button onClick={handleClick}>
//         Go to Salesforce Data
//       </button>

//       <h3>To-Do List</h3>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/salesforce');
//   };

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <button onClick={handleClick}>
//         Go to Salesforce Data
//       </button>
//     </div>
//   );
// }




// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <button onClick={() => navigate('/about')}>Go to About</button>
//     </div>
//   );
// }

// export default Home;