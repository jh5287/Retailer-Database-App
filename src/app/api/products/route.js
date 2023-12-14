import pool from "@/db"
// BEGIN: GET request to search customers by first and last name
export async function GET(request) {
    try {
       const query = "SELECT * FROM products"
       const results = await pool.query(query)
        console.log(results.rows)
       
       const products = []
       for (let i = 0; i < results.rows.length; i++) {
         const product = {
           
           product_id: results.rows[i].product_id,
           p_name: results.rows[i].p_name,
           price: results.rows[i].price,
           stock_quant: results.rows[i].stock_quant
         }
         products.push(product);
       }
       return new Response(JSON.stringify({ products: results.rows }), { status: 200 })


    } catch (err) {
        console.log(err)
        return new Response(err.message, { status: 500 })

    }
}
// END: GET request to search customers by first and last name
