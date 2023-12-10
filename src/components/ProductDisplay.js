const ProductDisplay = ({ initialProducts }) => {
    
  return (
    
    <div>
      <table style={{ borderCollapse: "collapse", border: "2px solid rgb(200,200,200)", letterSpacing: "1px",fontSize: "0.8rem"}}>
        <caption style={{padding: "10px"}}>Current Inventory</caption>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            </tr>
          </thead>
      <tbody>
        {initialProducts.map((product) => (
            <tr key={product.product_id}>
                <td>{product.p_name}</td>
                <td>${product.price}</td>
                <td>{product.stock_quant}</td>
            </tr>
            )
        )}
        </tbody>
      </table>
    </div>

  );
}   

export async function getServerSideProps({ query }) {
  const { id } = query;
  const product = await getProductById(id);
  return {
    props: {
      product,
    },
  };
}

export default ProductDisplay;