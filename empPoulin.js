/*Store Employee Name and ID Number */
class Employee {
    constructor(empName, empID) {
        this.empName = empName;
        this.empID = empID;
    }
    get empName() {
        return(this.empName);
    }
    get empID() {
        return(this.empID);
    }
}
/*Subclass of Employee, keep data for shift number and hourly pay rate */
class ProductionWorker extends Employee {
    constructor(shiftNum, payRate) {
        this.shiftNum = shiftNum;
        this.payRate = payRate;
    }
    get shiftNum() {
        return(this.shiftNum);
    }
    get payRate() {
        return(this.payRate);
    }
}

function calculate() {
    let empName =  document.getElementById('empName');
    let empId = document.getElementById('id');
    let shiftNum = document.getElementById('shiftNum');
    let payRate = document.getElementById('payRate');
    

    output = "Name: " + "<br>" + "ID: " + "<br>" + "Shift: " + "<br>" + "Hourly Pay Rate: ";
    document.getElementById('formResults').innerHTML = output;
}