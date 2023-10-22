#! /usr/bin/env node
import inquirer from "inquirer";
async function input():Promise<string> {
    const inp= await inquirer.prompt([{
type:"string",
name: "work",
message: "Enter the work in your list"

    }]);
return inp.work;
    
}
async function choise():Promise<string> {
const ch= await inquirer.prompt([{
    type:"string",
    name: "c",
    message:"To enter another work in your list press y"
}]);
return ch.c;    
}
let toDoList : string[]=[], another,work;
do{
work= await input();
toDoList.push(work);
another=await choise();
}while(another == 'y');
console.log("Your To Do list is given below");
for(let i=0;i<toDoList.length;i++){
    console.log(toDoList[i])
}