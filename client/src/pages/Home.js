import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/salesforce');
  };

  const items = [
    { id: 1, title: 'Review Salesforce API docs' },
    { id: 2, title: 'Connect frontend to backend' },
    { id: 3, title: 'Style Home page' },
  ];

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>
        Go to Salesforce Data
      </button>

      <h3>To-Do List</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
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