//Store data for Employee Name and ID Number
class Employee {
    constructor(empName, empId) {
        this._empName = empName;
        this._empId = empId;
    }
    /*Get Employee Name */
    get empName() {
        return(this._empName);
    }
    /*Get Employee ID */
    get empId() {
        return(this._empId);
    }
    /*Set Employee Name */
    set empName(empName) {
        this._empName = empName;
    }
    /*Set Employee ID */
    set empId(empId) {
        this._empId = empId;
    }
}
//Subclass of Employee, store data for shift number and hourly pay rate
class ProductionWorker extends Employee {
    constructor(empName, empId, shiftNum, payRate) {
        super(empName, empId);
        this._shiftNum = shiftNum;
        this._payRate = payRate;
    }
    /*Get Shift Number */
    get shiftNum() {
        return this._shiftNum;
    }
    /*Get Pay Rate */
    get payRate() {
        return this._payRate;
    }
    /*Set Shift Number */
    set shiftNum(shiftNum) {
        this._shiftNum = shiftNum;
    }
    /*Set Pay Rate */
    set payRate(payRate) {
        this._payRate = payRate;
    }
}

//Take Employee Name, Employee ID, shift # and pay rate from html form
function submit() {
    let empName     = document.getElementById('empName').value;
    let empId       = Number(document.getElementById('empId').value);
    let shiftNum    = Number(document.getElementById('shiftNum').value);
    let payRate     = Number(document.getElementById('payRate').value);
    
    //const prodWorker = new ProductionWorker(empName, empId, shiftNum, payRate);
    const prodWorker = new ProductionWorker();
    prodWorker.empName  = empName;
    prodWorker.empId    = empId;
    prodWorker.shiftNum = shiftNum;
    prodWorker.payRate  = payRate;
    //https://natclark.com/tutorials/javascript-formatting-currencies/
    const payRateFormatted = new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: 'currency',
    }).format(prodWorker.payRate);
    
    /*Output format-  
                Name: (Employee Name)
                ID: (Employee ID)
                Shift Number: (Shift Number)
                (Pay Rate)
    
    */
    output = "Name: " + prodWorker.empName + "<br>" + "ID: " + prodWorker.empId + "<br>" + "Shift: " + prodWorker.shiftNum + "<br>" + "Hourly Pay Rate: " + payRateFormatted;
    document.getElementById('formResults').innerHTML = output;
}
