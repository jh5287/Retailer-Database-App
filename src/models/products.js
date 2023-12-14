import pool from "@/db";

export const getProducts = async () => {
    const queryResult = await pool.query("SELECT * FROM products")
    const rows = queryResult.rows
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
    return products
  }