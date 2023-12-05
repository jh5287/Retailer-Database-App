// use this to query your db
import client from "@/db"
import UsersClient from "@/components/UsersClient"



const getUsers = async () => {
  const queryResult = await client.query("SELECT * FROM users")
  const rows = queryResult.rows
  const users = []
  for (const row of rows) {
    const newUser = {
      id: row.id,
      username: row.username,
      email: row.email,
      age: row.age
    }
    users.push(newUser)
  }

  return users



}




export default async  function Home() {
  let initialUsers = await getUsers()
  if (initialUsers.length === 0) { 

    // if not users exist, let's add some sample users ourself
    const insertQuery = `INSERT INTO users (username, email, age) VALUES ($1, $2, $3) RETURNING *`
    const usersToInsert = [
      {
        username: "John",
        email: "john.doe@gmail.com",
        age: 30
      },
      {
        username: "Methuselah",
        email: "godlives@gmail.com",
        age: 969
      }
    ]
    for (const user of usersToInsert) {
      // insert users one by one (not efficient but too lazy to rewrite)
      await client.query(insertQuery, [user.username, user.email, user.age])
    }

    initialUsers = await getUsers()
  }



  

  return (
    <div className="home">
      <p>Notice that I am an async functional component. This means that I run on the server</p>
      <p>First I fetch all users from the database, and then I pass them as props to a client component</p>
      <UsersClient initialUsers={initialUsers} />
    </div>
  )
}
