// Abstract classes forces the developers to implement the similar methods from base classes differently


abstract class ABCWater{


    name:string;

    employees: string[] = [];


    constructor(n:string){

        this.name = n;

    }


    abstract describe(this:ABCWater): void ;

    addEmployee (employee:string){


        this.employees.push(employee);


    }
}


class Dasan extends ABCWater{


    describe(this:Dasan){

        console.log('describe this is the name');
        
    }

}