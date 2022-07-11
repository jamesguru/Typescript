// Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

// TS tries to figure out what type of value a function will return



const add = (a:number , b: number) : number => {

return a+b;


}



// Destructuring with annotations 


const forecast = {

    date : new Date(),

    weather:'sunny'
}

const logWeather = (forecast:{date:Date; weather: string}): void => {

console.log(forecast.date);

console.log(forecast.weather);

}


// Destructuring


const destructuredWeather = ({date,weather}:{date:Date; weather:string}): void => {


    console.log(date);

    console.log(weather);


}