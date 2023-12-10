"use client"
import axios from 'axios';
import React, { useState } from 'react';
import CustomerSearchResults from '@/components/CustomerSearchResults';

function CustomerSearchPage() {
  const [customerID, setCustomerID] = useState('');
  const [customer, setCustomer] = useState('');

  

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const response = await axios.get(`/api/search/customer/${customerID}`)
        const selectedCustomer = response.data.customer;
        console.log(selectedCustomer)
        setCustomer(selectedCustomer);
    }
   
     catch (err) {
        alert('Error could not get user')
    }
    // Perform search logic here using firstName and lastName
  };

  return (
    <div>
      <h1>Customer Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Customer ID:
          <input type="text" value={customerID} onChange={(e) => setCustomerID(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Search</button>
      </form>

    <CustomerSearchResults customer={customer} />
    </div>
  );
}

export default CustomerSearchPage;