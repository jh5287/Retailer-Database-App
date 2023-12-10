import pool from "@/db";

export const getCustomerById = async (id) => {
    const { rows } = await pool.query(
        "SELECT * FROM customers WHERE customer_id = $1",
        [id]
    );
    return rows[0];
}

export const getCustomerByEmail = async (email) => {
    const { rows } = await pool.query(
        "SELECT * FROM customers WHERE email = $1",
        [email]
    );
    console.log(rows[0])
    return rows[0];
}

export const getCustomers = async () => {
    const {rows} = await pool.query(
        "SELECT * FROM customers"
    );

    return rows
    
 }


 export const getCustomerOrders = async (id) => {
    const {rows} = await pool.query(
        "select order_date, pay_date, pay_type, payments.total_amount from orders join payments on orders.pay_id = payments.pay_id where payments.customer_id = $1",
        [id]
    );
        console.log(rows)
    return rows[0]
    
 }
