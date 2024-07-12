"use strict";
//Create a Employee class with basic methods in typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.getAge = function () {
        return this._age;
    };
    Employee.prototype.getSalary = function () {
        return this._salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this._salary = salary;
    };
    Employee.prototype.displayEmployee = function () {
        console.log("Name: ".concat(this._name, ", Age: ").concat(this._age, ", Salary: ").concat(this._salary));
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map