import { getServiceById, getEmployees } from "@/models/service"



const Page =  async ({params}) => {
    const id = params.slug
    const service = await getServiceById(id)
    const employees = await getEmployees(id)
    const {employee_id, eployee_first_name, employee_last_name, salary} = employees
    return (
        <div>
            <h1>{service}</h1>
            <ul>
                {employees.map((employee) => <li key={employee.employee_id}>Name: {employee.employee_first_name} {employee.employee_last_name} <br/> Salary: {employee.salary}</li>)}
            </ul>
        </div>
    )

} 


export default Page