import React, { useEffect, useState } from 'react';
import { getSalesforceData } from '../api/salesforce';

export default function SalesforceData() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getSalesforceData().then(setLeads);
  }, []);

  return (
    <div>
      <h2>Salesforce Leads</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            {lead.name} - {lead.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
