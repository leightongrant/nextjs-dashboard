import { fetchCustomers } from "@/app/lib/data";
import { error } from "console";

const response = await fetchCustomers()

export default function Customers() {
  console.log(response)
  
  return <>
    <h1 className="text-4xl">Customers Page</h1>
    <ul>{response.map(customer => <li key={customer.id}>{customer.name }</li>)}</ul>
  </>
}