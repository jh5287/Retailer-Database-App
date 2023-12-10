import { getCustomerById, getCustomerOrders } from "@/models/customer"



const Page = async ({params}) => {
    console.log(params)

    const customerId = params.slug

    
    

    const customerDetails = await getCustomerById(customerId)

    const customerOrders = await getCustomerOrders(customerId)

    const {first_name, last_name, email, phone_num, id} = customerDetails
    const {order_date, pay_date, pay_type, total_amount} = customerOrders
    return (
        <>
            <div>
                <h1>Customer Details</h1>
                <ul>
                    <li>First Name: {first_name}</li>
                    <li>Last Name: {last_name}</li>
                    <li>Email: {email}</li>
                    <li>Phone: {phone_num}</li>
                    <li>Day of last order: {order_date}</li>
                    <li>Day of payment: {pay_date}</li>
                    <li>Payment type: {pay_type}</li>
                    <li>Total amount: {total_amount}</li>
                </ul>
            </div>
        </>
    )

}


export default Page