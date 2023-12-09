import pool from '@/db'
export async function DELETE(request, params) {
    try {
       const slug = params.params.slug
       const query = `DELETE FROM users WHERE username = $1`
       const results = await pool.query(query, [slug])
        console.log("results ", results)

       return new Response(JSON.stringify({ users: results.rows }), { status: 200 })



    } catch (err) {
        console.log(err)
        return new Response(err.message, { status: 500 })

    }
}