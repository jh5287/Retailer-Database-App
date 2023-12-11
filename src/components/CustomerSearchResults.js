const CustomerSearchResults = ({customer} ) => { 


    return (
        <>
        <ul style={{listStyleType: "none"}}>
         <li>
         Name: {customer.first_name} {customer.last_name} 
         <br/> Email: {customer.email}
         </li>
        </ul>
        </>
    )


}


export default CustomerSearchResults