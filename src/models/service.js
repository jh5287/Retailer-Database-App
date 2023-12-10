import pool from "@/db";

export const getServices = async () => { 
    const {rows} = await pool.query(
        "SELECT * FROM services"
    );

    return rows
}

export const getServiceById = async (id) => {
    const results  = await pool.query(
        "SELECT department_name FROM services WHERE service_id = $1",
        [id]
    );

    return results.rows[0].department_name;
}


export const getEmployees = async (id) => {
    const {rows} = await pool.query(
        "SELECT * FROM employees where service_id = $1", [id]
    );

    return rows
}