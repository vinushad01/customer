import { Employee } from "./employee";
import {Customer} from "./customer";
const customer = new Customer("John Doe", "johndoe@example.com", "123 Main St");
console.log(customer.getName()); // Output: John Doe
console.log(customer.getEmail());
customer.setAddress("456 Elm St");
customer.displayCustomer(); // Output: Name: John Doe, Email: johndoe@example.com, Address: 456 Elm St

const employee = new Employee("John Doe", 30, 50000);
console.log(employee.getName()); // Output: John Doe
employee.setSalary(60000);
employee.displayEmployee(); 

//async await promise