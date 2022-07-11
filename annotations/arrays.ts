const carMakers:string[] = ['ford','toyota','chevy'];

const dates:Date[] = [new Date(), new Date(), new Date()];


// two dimentional arrays


const carByMake: string[][] = [];


// why do we care 


// 1) TS can do type inference when extracting values from an array

// 2) TS can prevent us from adding incompatible values to the array

// 3) We can get help with 'map' , 'forEach', 'reduce' functions

// 4) Flexible - arrays can still contain multiple different types




// Flexible types 

const importantDates : (Date | String  | number) [] =[];

importantDates.push('2030-12-01');
importantDates.push(new Date());


