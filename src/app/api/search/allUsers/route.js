import pool from '@/db'
export async function GET(request, params) {
    try {
       const query = `SELECT * FROM users`
       const results = await pool.query(query)


       return new Response(JSON.stringify({ users: results.rows }), { status: 200 })



    } catch (err) {
        console.log(err)
        return new Response(err.message, { status: 500 })

    }
}