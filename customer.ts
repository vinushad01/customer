class Customer {
    private _name: string;
    private _email: string;
    private _address: string;
  
    constructor(name: string, email: string, address: string) {
      this._name = name;
      this._email = email;
      this._address = address;
    }
  
    public getName(): string {
      return this._name;
    }
  
    public getEmail(): string {
      return this._email;
    }
  
    public getAddress(): string {
      return this._address;
    }
  
    public setAddress(address: string): void {
      this._address = address;
    }
  
    public displayCustomer(): void {
      console.log(`Name: ${this._name}, Email: ${this._email}, Address: ${this._address}`);
    }
}

export {Customer};
