import { getServices } from "@/models/service";

const Page =  async () => {

  const services = await getServices();

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.service_id}> <a href={`services/${service.service_id}`} >{service.department_name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;