// use this to query your db
import client from "@/db"
import ProductDisplay from "@/components/ProductDisplay"



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
      <h1>Retailer Database</h1>
      <ProductDisplay initialProducts={initialProducts} />
      <a href="/promotions">Browse our promotions for our items!</a>
      <br/><br/><br/>
      <br/>
      <a href="/customer">Search for a customer</a>
      <p>  OR  </p>
      <a href="/allCustomers">Browse all customers</a>
      <br/><br/><br/>
      <a href="/services">Browse our services</a>
    </div>
  )
}
