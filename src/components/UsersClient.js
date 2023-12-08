"use client"
import UserDisplay from "./UserDisplay"
import AddUserForm from "./AddUserForm"
import DeleteUserForm from "./DeleteUserForm"
import GetUserForm from "./GetUserForm"
import { useState } from "react"


const UsersClient = ({initialUsers}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [users, setUsers] = useState(initialUsers)


    return (
        <div>
            <AddUserForm setUsers={setUsers} />
            <DeleteUserForm setUsers={setUsers} />
            <UserDisplay users={users} />
            <GetUserForm setCurrentUser={setCurrentUser} />
            <h3>Current User: {currentUser !== null ? currentUser : "None"}</h3>
        </div>
    )
}

export default UsersClient