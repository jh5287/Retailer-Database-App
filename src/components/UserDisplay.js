
// if there is no "use client directive, the code is run on the server"
const UserDisplay = ({users}) => {
    return (
        <>
        <h1>Users</h1>
         <ul className="user-list">
        {users.map(user => <li key={user.id}>{user.username} at {user.email} </li>)}

       </ul>
        </>
      
    )
}

export default UserDisplay