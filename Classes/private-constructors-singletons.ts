// private constructors does not allow for the instantiation
// In  that case you can use the static methods and properties 

// we can make the instance inside the class

// Singletons



class Teacher {


    private subject:string;


    private instance = Teacher;

    

    constructor(){


    }



    teaching (){

        console.log(`Teacher teaches a subject ${this.subject}`);
    }


    getInstance(){

        if(this.instance){



            return this.instance;
        }


       
    }
}


const lecturer = new Teacher()