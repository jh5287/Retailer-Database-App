"use client"
import UserDisplay from "./UserDisplay"
import AddUserForm from "./AddUserForm"
import { useState } from "react"


const UsersClient = ({initialUsers}) => {

    const [users, setUsers] = useState(initialUsers)


    return (
        <div>
            <AddUserForm setUsers={setUsers} />
            <UserDisplay users={users} />
        </div>
    )
}

export default UsersClient