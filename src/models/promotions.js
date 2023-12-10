import pool from "@/db";


export const getPromotions = async () => {
    const {rows} = await pool.query(
        "SELECT * FROM promotions"
    );

    return rows
    
 }


 export const getPromotionById = async (id) => {
    const {rows} = await pool.query(
        `SELECT
        p.product_ID,
        p.p_name,
        p.price AS original_price,
        pr.discount_rate,
        round(p.price - (p.price * pr.discount_rate / 100)) AS final_price
    FROM
        products p
    JOIN
        promotions pr ON p.product_ID = pr.product_ID
        WHERE pr.promo_id = $1;`, [id]
    );

    return rows
    
 }