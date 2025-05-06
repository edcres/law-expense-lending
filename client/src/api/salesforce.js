export async function getSalesforceData() {
    // Placeholder: replace with real API call later
    return [
      { id: 1, name: 'Sample Lead', status: 'Open' },
      { id: 2, name: 'Another Lead', status: 'Closed' }
    ];
  }
// Maybe replace with this (probably not bc we already have a way of doing the backend):
// import axios from 'axios';
// export async function getSalesforceData() {
//   const res = await axios.get('http://localhost:5000/salesforce/leads');
//   return res.data;
// }