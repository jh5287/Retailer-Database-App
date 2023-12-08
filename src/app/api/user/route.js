import pool from "@/db"
export async function POST(request) {
    try {
        const body = await request.json()
        console.log("body ", body)
        const { id, username, email, age } = body
        console.log("user id ", id)
        console.log("user name ", username)
        console.log("user email ", email)
        console.log("user age ", age)
        if (!id ||!username || !email || !age) { 
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
        }

        const insertQuery = `INSERT INTO users (id, username, email, age) VALUES ($1, $2, $3, $4) RETURNING *`
        const queryResult = await pool.query(insertQuery, [id, username, email, age])
        console.log("query result ", queryResult)
        const createdUserData = queryResult.rows[0]
        console.log("created user data ", createdUserData)

        const formattedUser = {
            id: createdUserData.id,
            username: createdUserData.username,
            email: createdUserData.email,
            age: createdUserData.age
        }

        
        return new Response(JSON.stringify({ user:formattedUser }), { status: 200 })


    } catch (err) {
        return new Response(err.message, { status: 500 })

    }
}







export async function GET(request) {
    try {
        console.log("request ", request.json())
        const body = await request.json();
        console.log("body ", body)
        const {id, username}  = body;
        console.log("user id ", id)
        if (!id) { 
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
        }
        const getQuery = `SELECT username FROM users WHERE id = $1`
        
        const queryResult = await pool.query(getQuery, [id])

        const foundUser = queryResult.rows[0].username
        
        return new Response(JSON.stringify({ username:foundUser }), { status: 200 })
    } catch (err) {
        return new Response(err.message, { status: 500 })
    }
}

//export async function GET(request) {
//    try {
//        const queryResult = await pool.query("SELECT * FROM users RETURNING *", (error, results) => {
//            if (error) {
//                throw error
//            }
//            response.status(200).json(results.rows)
//        })
//        const rows = queryResult.rows
//        const users = []
//        for (const row of rows) {
//            const newUser = {
//                id: row.id,
//                username: row.username,
//                email: row.email,
//                age: row.age
//            }
//            users.push(newUser)
//        }
//        return new Response(JSON.stringify({ users:users }), { status: 200 })
//    } catch (err) {
//        return new Response(err.message, { status: 500 })
//    }
//}



//export async function DELETE(request) {
//    try {
//        const body = await request.json()
//        const { id } = body
//        if (!id) {
//            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
//        }
//
//        const deleteQuery = `DELETE FROM users WHERE id = $1 RETURNING *`
//        const queryResult = await pool.query(deleteQuery, [id], (error, results) => {
//            if (error) {
//                throw error
//            }
//            response.status(200).json(`Student deleted with ID: ${id}`)
//        })
//
//        const deletedUserData = queryResult.rows[0]
//        return new Response(JSON.stringify({ deletedUserData }), { status: 200 })
//    } catch (err) {
//        return new Response(err.message, { status: 500 })
//    }
//}