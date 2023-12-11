import { getServices } from "@/models/service";

import BackToHome from "@/components/BackToHome";
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
            <BackToHome />
    </div>
  );
};

export default Page;