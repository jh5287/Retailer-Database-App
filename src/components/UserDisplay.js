
// if there is no "use client directive, the code is run on the server"
const UserDisplay = ({users}) => {
    return (
        <>
        <h4>Current Users</h4>
         <ul className="user-list">
        {users.map(user => <li key={user.id}>ID: {user.id} User:{user.username} at {user.email} </li>)}

       </ul>
        </>
      
    )
}

export default UserDisplay