
// Protected means that you can access it through the classes that have extended the class. Unlike the private which only accessed through the same class.




class Jitu{


    name:string;

    protected employees: string[] = [];


    constructor(n:string,name:string){

        this.name = n;

    }


    describe(this:Jitu){


        console.log("Jitu" + this.name);
        
        
    }


    addEmployee (employee:string){


        this.employees.push(employee);


    }
}


class griffin extends Jitu {


    admin:string[] = [];

    constructor(id:string, admins:string[]){

        super(id,'cbk')


    }
}

const newjitu = new Jitu("accounting","Jitu");