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

