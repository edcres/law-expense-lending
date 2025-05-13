const statusOrder = [
  "Pending",
  "Marked for Request",
  "Requested",
  "Funded",
  "Paid Off"
];

const mockExpenses = [
  {
    id: 1,
    name: "E-043298",
    amount: 500,
    matter_display_name: "John vs Smith",
    funded_by_loc: false,
    created_at: "2024-12-01T12:00:00Z",
    status: "Pending"
  },
  {
    id: 2,
    name: "E-043299",
    amount: 1000,
    matter_display_name: "Miller vs Co.",
    funded_by_loc: true,
    created_at: "2024-12-05T09:00:00Z",
    status: "Requested"
  }
];

export function getExpenses() {
  return Promise.resolve(mockExpenses);
}

export function getStatusOrder() {
  return statusOrder;
}

// Maybe replace with this (probably not bc we already have a way of doing the backend):
// import axios from 'axios';
// export async function getSalesforceData() {
//   const res = await axios.get('http://localhost:5000/salesforce/leads');
//   return res.data;
// }