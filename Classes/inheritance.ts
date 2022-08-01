class ABZ{


    name:string;

    employees: string[] = [];


    constructor(n:string,name:string){

        this.name = n;

    }


    describe(this:ABZ){


        console.log("ABZ" + this.name);
        
        
    }


    addEmployee (employee:string){


        this.employees.push(employee);


    }
}


class CBK extends ABZ {


    admin:string[] = [];

    constructor(id:string, admins:string[]){

        super(id,'cbk')


    }
}

const abz = new ABZ("accounting","abz");