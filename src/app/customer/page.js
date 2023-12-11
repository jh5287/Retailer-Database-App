"use client"
import axios from 'axios';
import React, { useState } from 'react';
import CustomerSearchResults from '@/components/CustomerSearchResults';
import BackToHome from '@/components/BackToHome';

function CustomerSearchPage() {
  const [customerID, setCustomerID] = useState('');
  const [customer, setCustomer] = useState('');

  

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const response = await axios.get(`/api/customerSearch/${customerID}`)
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
    <BackToHome/>
    </div>
  );
}

export default CustomerSearchPage;
