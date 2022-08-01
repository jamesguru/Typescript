// Clases are blueprint of building object 
// Object use properties and methods
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department" + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var accounting = new Department("accounting");
accounting.describe();
var accountingCopy = { name: "Dummy", employees: [], addEmployee: function () { }, describe: accounting.describe };
accountingCopy.describe();
console.log(accounting);
