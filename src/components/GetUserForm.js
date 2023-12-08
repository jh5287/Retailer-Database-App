"use client"
import React, { useState } from 'react';
import axios from 'axios';

const GetUserForm = ({setCurrentUser}) => {
  const [id, setId] = useState("");

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
        try {
            console.log("user id ", id)
            const response = await axios.get("/api/user", {
                id,
                username
            })
            console.log("response ", response.data.username)
            const selectedUser = response.data.username;
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
