class AspireEmployee{
    empId: number;
    empName: string;
    constructor(){
        this.empId = 1;
        this.empName = "jai";
    }
    display(){
        console.log(this.empId + " " + this.empName);
    }
}
let aspireEmployee = new AspireEmployee();
aspireEmployee.display();