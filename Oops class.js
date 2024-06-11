class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getName() { return this.name; }
  
    setName(name) { this.name = name; }
  
    getAge() { return this.age;}

    setAge(age) { this.age=age;}
  

    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
  }
  
  class Manager extends Employee {
    constructor(name, age, department) {
      super(name, age);
      this.department = department;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`);
    }
  }
  
  const employee1 = new Employee('Jai', 22);
  const manager1 = new Manager('Hari', 22,'Marketing');
  

  console.log("Employee Details:");
  employee1.displayDetails();
  
  console.log("\nManager Details:");
  manager1.displayDetails();
  
  employee1.setAge(23);
  console.log("\nUpdated Age of Employee 1:", employee1.getAge());
  