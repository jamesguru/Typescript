

class School{


    public name:string;

    private employees: string[] = [];


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

const physicsDepartment = new School("accounting");

// YOU CANNOT ACCESS LIKE THIS : physicsDepartment.employees || private

// YOU CAN ACCESS LIKE THIS: physicsDepartment.name || public

