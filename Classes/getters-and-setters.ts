

class Coward{



    private report:string;

    private reports:string[] = [];

    get mostRecentReport() {

        if(this.report){


            return this.report;
        }



        throw new Error("no report found");
        
    }


    set addReport(val:string){


    if(this.reports){

    this.reports.push(val);
    }


    }


    constructor(){



    }
}