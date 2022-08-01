class Company{


    // name:string;

    private employees: string[] = [];


    constructor(private readonly name:string){

       

    }


    describe(this:Department){


        // this.name = "james"; | cannot reassign the readonly property


        console.log("Department" + this.name);
        
        
    }


    addEmployee (employee:string){


        this.employees.push(employee);


    }
}

const guarding = new Company("accounting");
