// use this to query your db

import client from "@/db"
import UsersClient from "@/components/UsersClient"
import ProductDisplay from "@/components/ProductDisplay"


const getUsers = async () => {
  const queryResult = await client.query("SELECT * FROM users")

  console.log("query result type", typeof queryResult)
  console.log("query resultrows type ",typeof queryResult.rows)
  const rows = queryResult.rows
  console.log("rows type", typeof rows)
  console.log("rows ", rows[0].id)
  const users = []
  for (const row of rows) {
    console.log(typeof row)
    const newUser = {
      id: row.id,
      username: row.username,
      email: row.email,
      age: row.age
    }
    users.push(newUser)
  }
  console.log("initial users ", users)
  return users
}

const getProducts = async () => {
  const queryResult = await client.query("SELECT * FROM product")
  console.log("query result type", typeof queryResult)
  console.log("query resultrows type ",typeof queryResult.rows)
  const rows = queryResult.rows
  console.log("rows", rows)
  console.log("rows ", rows[0].product_id)
  const products = []
  for (let i = 0; i < rows.length; i++) {
    const product = {
      
      product_id: rows[i].product_id,
      p_name: rows[i].p_name,
      price: rows[i].price,
      stock_quant: rows[i].stock_quant
    }
    products.push(product);
  }
  console.log("initial products ", products)
  return products
}


export default async  function Home() {

  let initialProducts = await getProducts()
  let initialUsers = await getUsers()
  if (initialUsers.length === 1) { 

    // if not users exist, let's add some sample users ourself
    const insertQuery = `INSERT INTO users (id, username, email, age) VALUES ($1, $2, $3, $4) RETURNING *`
    const usersToInsert = [
      {
        id: 3456,
        username: "John",
        email: "john.doe@gmail.com",
        age: 30
      },
      {
        id: 4567,
        username: "Methuselah",
        email: "godlives@gmail.com",
        age: 69
      }
    ]
    for (const user of usersToInsert) {
      // insert users one by one (not efficient but too lazy to rewrite)
      await client.query(insertQuery, [user.id, user.username, user.email, user.age])
    }

    //initialUsers = await getUsers()
  }


  
  

  return (
    <div className="home">
      <h1>Users Database</h1>
      <ProductDisplay initialProducts={initialProducts} />
      <UsersClient initialUsers={initialUsers} />
    </div>
  )
}
