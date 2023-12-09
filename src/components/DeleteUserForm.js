"use client"
import React, { useState } from 'react';
import axios from 'axios';

const DeleteUserForm = ({setUsers}) => {
  const [userId, setUserId] = useState("");

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
        try {
            console.log("user id ", userId)
            const response = await axios.get(`/api/search/id/${userId}`);
            const selectedUser = response.data.users
            console.log("fetched user data by ID ", selectedUser)
            console.log("selected user ", selectedUser)
            const deletedUser = await axios.delete(`api/user/editUser/deleteUser/${selectedUser}`)
            console.log("deleted user ", deletedUser.data.user)
            const usersResponse = await axios.get("/api/search/allUsers")
            const users = usersResponse.data.users
            const updatedUsers = users.filter((user) => user.id !== selectedUser)
            setUsers(updatedUsers)
    
        }
       
         catch (err) {
            alert('Error could not delete user')
        }
           
    // TODO: Implement the logic to delete the user with the given userId
    console.log(`Deleting user with ID: ${userId}`);
    // Reset the form
    setUserId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input type="text" value={userId} onChange={handleInputChange} />
      </label>
      <button type="submit">Delete User</button>
    </form>
  );
};

export default DeleteUserForm;
