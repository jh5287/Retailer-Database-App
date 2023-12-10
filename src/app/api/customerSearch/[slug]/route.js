import pool from "@/db"
// BEGIN: GET request to search customers by first and last name
export async function GET(request, params) {
    try {
        const slug = params.params.slug
       const query = "SELECT * FROM customers WHERE customer_id = $1"
       const results = await pool.query(query, [slug])
        console.log(results.rows)
       return new Response(JSON.stringify({ customer: results.rows[0] }), { status: 200 })



    } catch (err) {
        console.log(err)
        return new Response(err.message, { status: 500 })

    }
}
// END: GET request to search customers by first and last name
