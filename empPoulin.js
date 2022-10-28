/*Store Employee Name and ID Number */
class Employee {
    constructor(empName, empId) {
        this._empName = empName;
        this._empId = empId;
    }
    get empName() {
        return(this._empName);
    }
    get empId() {
        return(this._empId);
    }
}
/*Subclass of Employee, keep data for shift number and hourly pay rate */
class ProductionWorker extends Employee {
    constructor(empName, empId, shiftNum, payRate) {
        super(empName, empId);
        this._shiftNum = shiftNum;
        this._payRate = payRate;
    }
    get shiftNum() {
        return this._shiftNum;
    }
    get payRate() {
        return this._payRate;
    }
}

function calculate() {
    let empName =  document.getElementById('empName').value;
    let empId = document.getElementById('empId').value;
    let shiftNum = document.getElementById('shiftNum').value;
    let payRate = document.getElementById('payRate').value;
    
    
    const prodWorker = new ProductionWorker(empName, empId, shiftNum, payRate);
    //https://natclark.com/tutorials/javascript-formatting-currencies/
    const payRateFormatted = new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: 'currency',
    }).format(prodWorker.payRate);

    output = "Name: " + prodWorker.empName + "<br>" + "ID: " + prodWorker.empId + "<br>" + "Shift: " + prodWorker.shiftNum + "<br>" + "Hourly Pay Rate: " + payRateFormatted;
    document.getElementById('formResults').innerHTML = output;
}
