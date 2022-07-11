// Type annotations is code that we add to tell Typescript what type of value a variable will refer to.


//Typescript tries to figure out what type of value a variable refers to


// type annotations


const apples : number = 5;

// built in objects

let now : Date = new Date();


// array 

let colors: string[] = ['red', 'green', 'blue'];

// Classes


class Car {


}

let car : Car = new Car();

// Object literal

let point: {x:number; y:number} ={

    x: 10,

    y: 40
}

// Function

const logNumber: (i: number) => void = (i:number) => {

    console.log(i);
}


// any means that TS have no idea what the value type is.


// Fixing any type 


const json = {
"x" : 10,

"y" : 20,
}


// const coordinates : { x:number ; y: number} = JSON.parse(json);


// When to use annotations

// 1) Function that returns the 'any' type

// 2) When we declare a variable on one line and then initialize it later

let isCompleted: boolean;

isCompleted = false;


// 3) Variable whose type cannot be inferred  correctly



let numbers = [-10, -1, 12];


let numbersAboveZero: boolean | number = false;


for(let i =0 ; i< numbers.length;i++){


    if(numbers[i] > 0){

        numbersAboveZero = numbers[i];


    }


}


