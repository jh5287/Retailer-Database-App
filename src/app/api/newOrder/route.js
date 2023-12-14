import pool from "@/db"
export async function POST(request) {
    try {
        const body = await request.json()
        console.log("body", body)
        const { customerID, firstName, lastName, email, phone_num, payId, payType, payDate, totalAmount, orderId, orderDate, productId, product, quantity } = body
        console.log("customerID", customerID)
        if (!customerID || !firstName || !lastName || !email || !phone_num || !payDate || !totalAmount || !orderId || !orderDate|| !payId || !payType || !productId || !product || !quantity) { 
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
        }
        const customerIDnew = parseInt(customerID)
        const phone_numNew = parseInt(phone_num)
        const totalAmountnew = parseInt(totalAmount)
        const quantityNew = parseInt(quantity)
        console.log("customerID", typeof customerID)
        console.log("firstName", firstName)
        console.log("lastName", lastName)
        console.log("email", email)
        console.log("phone_num", phone_num)
        console.log("payId", payId)
        console.log("payType", payType)
        console.log("payDate", payDate)
        console.log("totalAmount", totalAmount)
        console.log("orderId", orderId)
        console.log("orderDate", orderDate)
        console.log("productId", productId)
        console.log("product", product)
        console.log("quantity", quantity)

        const insertQuery = `
        CALL create_order(
            $1, 
            $2, 
            $3, 
            $4, 
            $5,
            $6, 
            $7, 
            $8, 
            $9,
            $10, 
            $11,
            $12,
            $13,
            $14
        );
        `

        const insertCustomer = `
        INSERT INTO customers (customer_id, first_name, last_name, email, phone_num)
	VALUES ($1, $2, $3, $4, $5);
    `
    const insertPayment = `
    INSERT INTO payments (pay_id, pay_type, pay_date, customer_id)
	values ($1, $2, $3, $4);
	`
	const insertOrder =`
    INSERT INTO orders (order_id, customer_id, order_date, total_amount, pay_ID)
	VALUES ($1, $2, $3, $4, $5));
	`
    const insertProduct = `
	INSERT INTO products_in_orders (order_id, product_id, order_quantity)
	VALUES ($1, $2, $3); `


        
        //const queryResult = await pool.query(insertQuery, [customerIDnew, firstName, lastName, email, phone_numNew, payId, payType, payDate, totalAmountnew, orderId, orderDate, productId, product, quantityNew])
        const queryResultCustomer = await pool.query(insertCustomer, [customerIDnew, firstName, lastName, email, phone_numNew])
        const queryResultPayment = await pool.query(insertPayment, [payId, payType, payDate, customerIDnew])
        const queryResultOrder = await pool.query(insertOrder, [orderId, customerIDnew, orderDate, totalAmountnew, payId])
        const queryResultProduct = await pool.query(insertProduct, [orderId, productId, quantityNew])
        console.log("Results", queryResultCustomer.rows)
        const createdCustomerData = queryResultCustomer.rows[0]
        const createdPaymentData = queryResultPayment.rows[0]
        const createdOrderData = queryResultOrder.rows[0]
        const createdProductData = queryResultProduct.rows[0]

        const formattedUser = {
            customerID: createdCustomerData.customerID, 
            firstName: createdCustomerData.firstName, 
            lastName:  createdCustomerData.lastName, 
            email: createdCustomerData.email, 
            phone_num: createdCustomerData.phone_num,  
            payId: createdPaymentData.payId, 
            payType: createdPaymentData.payType, 
            payDate: createdPaymentData.payDate,
            totalAmount: createdOrderData.totalAmount,
            orderId: createdOrderData.orderId, 
            orderDate: createdOrderData.orderDate,
            productId: createdProductData.productId,
            product: createdProductData.product, 
            quantity: createdProductData.quantity
        }
        console.log("formattedUser", formattedUser)
        
        return new Response(JSON.stringify({ user:formattedUser }), { status: 200 })


    } catch (err) {
        return new Response(err.message, { status: 500 })

    }
}