// use this to query your db
import client from "@/db"
import ProductDisplay from "@/components/ProductDisplay"
import OrderPage from "@/components/OrderPage"



const getProducts = async () => {
  const queryResult = await client.query("SELECT * FROM products")
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


export default async function Home() {

  let initialProducts = await getProducts()



  return (
    <div className="home">
      <div className="header" style={{display: "flex", alignItems: "center"}}>
        <h1 style={{marginRight: "auto"}}>Retailer Database</h1>
        <div style={{display: "flex", gap: "10px"}}>
          <a href="/promotions" >Browse our promotions for our items!</a>
          <a href="/customer">Search for a customer</a>
          <a href="/allCustomers">Browse all customers</a>
          <a href="/services">Browse our services</a>
        </div>
      </div>
      
      <ProductDisplay initialProducts={initialProducts} />
      <OrderPage/>
    </div>
  )
}
