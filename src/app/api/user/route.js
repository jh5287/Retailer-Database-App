import pool from "@/db"
export async function POST(request) {
    try {
        const body = await request.json()
        const { username, email, age } = body
        if (!username || !email || !age) { 
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
        }

        const insertQuery = `INSERT INTO users (username, email, age) VALUES ($1, $2, $3) RETURNING *`
        const queryResult = await pool.query(insertQuery, [username, email, age])

        const createdUserData = queryResult.rows[0]


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