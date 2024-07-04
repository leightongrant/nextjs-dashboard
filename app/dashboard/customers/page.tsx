import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

const allCustomers = await fetchCustomers()
const customers = await fetchFilteredCustomers(allCustomers[0].name)

// console.log(allCustomers)

export default function Customers() {
  
  
  return <><CustomersTable customers={customers}/>  
  </>
}