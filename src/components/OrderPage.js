"use client"
import { useState } from "react";
import axios from 'axios';


const OrderPage = () => {
    const [customerID, setCustomer] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [phone_num, setPhone_num] = useState('')
    const [payId, setPayId] = useState('')
    const [payType, setPayType] = useState('')
    const [payDate, setPayDate] = useState('')
    const [totalAmount, setTotalAmount] = useState('')
    const [orderId, setOrderId] = useState('')
    const [orderDate, setOrderDate] = useState('')
    const [productId, setProductId] = useState('')
    const [product, setProduct] = useState('Laptop')
    const [quantity, setQuantity] = useState('')

    //const getProducts = async (event) => {
    //    event.preventDefault()
    //    try{
    //        const response = await axios.get('/api/products')
    //        const products = response.data.products
    //        console.log(products)
    //        return products
    //    }
    //    catch (err) {
    //        alert('Error could not get products')
    //    }
    //};
    //const initialProducts = await getProducts();

    const onHandleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("/api/newOrder", {
                customerID,
                firstName,
                lastName, 
                email,
                phone_num, 
                payId,
                payType,
                payDate,
                totalAmount,
                orderId, 
                orderDate, 
                productId,
                product,
                quantity 
            })
                console.log(response)
            alert('Order placed successfully!')
        }
       
         catch (err) {
            alert('Error could not post order')
        }
        // Perform search logic here using firstName and lastName
      };

    return (
        <div>
        <h1>Order Form</h1>
        
        <form onSubmit={onHandleSubmit}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <label htmlFor='customerID'>Customer ID:</label>
        <input type="text" id='customerID' name='customerID' value={customerID} onChange={(e) => setCustomer(e.target.value)} />
        <label htmlFor='firstName'>Customer Name:</label>
        <input type="text" id='firstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label htmlFor='lastName'>Customer Last Name:</label>
        <input type="text" id='lastName' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label htmlFor='email'>Customer Email:</label>
        <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='phone_num'>Customer Phone Number:</label>
        <input type="text" id='phone_num' name='phone_num' value={phone_num} onChange={(e) => setPhone_num(e.target.value)} />
        <label htmlFor='orderId'>Order ID:</label>
        <input type="text" id='orderId' name='orderId' value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        <label htmlFor='orderDate'>Order Date:</label>
        <input type="text" id='orderDate' name='orderDate' value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
        <label htmlFor='payId'>Payment ID:</label>
        <input type="text" id='payId' name='payId' value={payId} onChange={(e) => setPayId(e.target.value)} />
        <label htmlFor='payType'>Payment Type:</label>
        <input type="text" id='payType' name='payType' value={payType} onChange={(e) => setPayType(e.target.value)} />
        <label htmlFor='payDate'>Payment Date:</label>
        <input type="text" id='payDate' name='payDate' value={payDate} onChange={(e) => setPayDate(e.target.value)} />
        <label htmlFor='totalAmount'>Total Amount:</label>
        <input type="text" id='totalAmount' name='totalAmount' value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
        <label htmlFor='productId'>Product ID:</label>
        <input type="text" id='productId' name='productId' value={productId} onChange={(e) => setProductId(e.target.value)} />
        <label htmlFor='product'>Product:</label>
        <select name="product" id="product" value={product} onChange={(e)=> setProduct(e.target.value)}>
         {/*{initialProducts.map((product) => (
              <option key={product.product_id} value={product.product_id}>{product.p_name}</option>
            )
         )}*/}
         <option value="Laptop" defaultValue>Laptop</option>
         <option value="Smartphone">Smartphone</option>
         <option value="Headphones">Headphones</option>
        </select>
        <label htmlFor='quantity'>Quantity:</label>
        <input type="text" id='quantity' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button type="submit">Place Order</button>
        <br />
        <br />
        </div>
      </form>
      
        </div>
    );
    };



export default OrderPage;