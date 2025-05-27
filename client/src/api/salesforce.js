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
    status: "Pending",
    status_history: [
      { stage: "Pending", date: "2024-12-01" },
      { stage: "Marked for Request", date: "2024-12-02" },
      { stage: "Requested", date: "2024-12-03" }
    ],
    interest_accrued_by_day: [
      { date: "2024-12-01", change: 0.00 },
      { date: "2024-12-02", change: 1.25 },
      { date: "2024-12-03", change: 2.18 }
    ]
  },
  {
    id: 2,
    name: "E-043299",
    amount: 1000,
    matter_display_name: "Miller vs Co.",
    funded_by_loc: true,
    created_at: "2024-12-05T09:00:00Z",
    status: "Requested",
    status_history: [
      { stage: "Pending", date: "2024-12-04" },
      { stage: "Requested", date: "2024-12-05" }
    ],
    interest_accrued_by_day: [
      { date: "2024-12-04", change: 0.00 },
      { date: "2024-12-05", change: 1.20 }
    ]
  }
];

export function getExpenses() {
  return Promise.resolve(mockExpenses);
}

export function getExpenseById(id) {
  return Promise.resolve(mockExpenses.find(e => e.id === parseInt(id)));
}

export function getStatusOrder() {
  return statusOrder;
}
