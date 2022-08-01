interface Person{


    teeth:string;


}


interface Driver extends Person {


    drive(drive:string):void;

}


class Male implements Driver,Person{


    teeth: string;


    name:string;

    //legs:number;

    legs:string;

    greet(){


    }


    drive(drive:string){


    }
}