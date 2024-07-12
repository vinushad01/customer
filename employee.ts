
//Create a Employee class with basic methods in typescript


class Employee {
    private _name: string;
    private _age: number;
    private _salary: number;
  
    constructor(name: string, age: number, salary: number) {
      this._name = name;
      this._age = age;
      this._salary = salary;
    }
  
    public getName(): string {
      return this._name;
    }
  
    public getAge(): number {
      return this._age;
    }
  
    public getSalary(): number {
      return this._salary;
    }
  
    public setSalary(salary: number): void {
      this._salary = salary;
    }
  
    public displayEmployee(): void {
      console.log(`Name: ${this._name}, Age: ${this._age}, Salary: ${this._salary}`);
    }
  }


  export { Employee };

