import axios from 'axios';
import {Todo} from './Todo';

const url = "https://jsonplaceholder.typicode.com/todos/2";

axios.get(url).then(response => {


    


   const todo:Todo  = response.data;


   const ID = todo.id;

   const title = todo.title;

   const finished = todo.completed;




   logInfo(ID, title, finished);

  
});




const logInfo = (id:number,title:string,completed:boolean) => {


 console.log(`The id ${id} , the Title ${title} , the finished ${completed}`);



}



// Types of Typescript

// Type is the easy way to refer to the properties and functions that a value has.


// Types are two in nature i) Primitive types  and ii) Object types

// Primitive types include number, boolean, void, undefined, string, symbol, null

// Object types include functions,arrays,objects,classes



