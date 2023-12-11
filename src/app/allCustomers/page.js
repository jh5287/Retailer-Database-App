import BackToHome from "@/components/BackToHome";
import { getCustomers } from "@/models/customer";

const Page = async () => {
  const customers = await getCustomers();


  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customer_id}>
            <a href={`/allCustomers/${customer.customer_id}`}>{customer.first_name} {customer.last_name}</a>
          </li>
        ))}
      </ul>
      <BackToHome />
    </div>
  );
};

export default Page;
