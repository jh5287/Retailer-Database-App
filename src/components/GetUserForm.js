"use client"
import React, { useState } from 'react';
import axios from 'axios';

const GetUserForm = ({setCurrentUser}) => {
  const [id, setId] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
        try {
            const response = await axios.get(`/api/search/id/${id}`)
            const selectedUser = response.data.users;
            setCurrentUser(selectedUser);
        }
       
         catch (err) {
            alert('Error could not get user')
        }
           
    
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <button type="submit">Get User</button>
    </form>
  );
};

export default GetUserForm;
