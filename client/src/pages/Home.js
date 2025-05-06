import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/salesforce');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>
        Go to Salesforce Data
      </button>
    </div>
  );
}

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