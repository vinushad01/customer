"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name, email, address) {
        this._name = name;
        this._email = email;
        this._address = address;
    }
    Customer.prototype.getName = function () {
        return this._name;
    };
    Customer.prototype.getEmail = function () {
        return this._email;
    };
    Customer.prototype.getAddress = function () {
        return this._address;
    };
    Customer.prototype.setAddress = function (address) {
        this._address = address;
    };
    Customer.prototype.displayCustomer = function () {
        console.log("Name: ".concat(this._name, ", Email: ").concat(this._email, ", Address: ").concat(this._address));
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map