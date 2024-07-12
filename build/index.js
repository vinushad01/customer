"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var customer_1 = require("./customer");
var customer = new customer_1.Customer("John Doe", "johndoe@example.com", "123 Main St");
console.log(customer.getName()); // Output: John Doe
console.log(customer.getEmail());
customer.setAddress("456 Elm St");
customer.displayCustomer(); // Output: Name: John Doe, Email: johndoe@example.com, Address: 456 Elm St
var employee = new employee_1.Employee("John Doe", 30, 50000);
console.log(employee.getName()); // Output: John Doe
employee.setSalary(60000);
employee.displayEmployee();
//async await promise
//# sourceMappingURL=index.js.map