class Employee{
    empId: number;
    empName: string;
    constructor(empId: number, empName: string){
        this.empId = empId;
        this.empName = empName;
    }
    show() {
        console.log(this.empId + " " + this.empName);
    }
}

class Manager extends Employee{
    constructor(empid: number, empname: string){
        super(empid, empname);
    }
}

let manager = new Manager(1, "jai");
manager.show();