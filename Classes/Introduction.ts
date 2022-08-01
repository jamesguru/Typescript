// Clases are blueprint of building object 

// Object use properties and methods


class Department{


    name:string;

    employees: string[] = [];


    constructor(n:string){

        this.name = n;

    }


    describe(this:Department){


        console.log("Department" + this.name);
        
        
    }


    addEmployee (employee:string){


        this.employees.push(employee);


    }
}

const accounting = new Department("accounting");

accounting.describe()

const accountingCopy = {name:"Dummy",employees:[],addEmployee: () => {}, describe:accounting.describe};

accountingCopy.describe();

console.log(accounting);