#! /usr/bin/env node
import inquirer from "inquirer";
interface account {
    name : string;
    id : string;
    blance : number;
    pin : string;
}
let user : account [] =[
    {
        name : "Ajmal",
        id : "1",
        blance : Math.floor(Math.random()*1000000),
        pin: "3214"

    },
    {
        name : "Abdul Raqeeb",
        id : "2",
        blance : Math.floor(Math.random()*1000000),
        pin: "1234"

    },
    {
        name : "Ather",
        id : "3",
        blance : Math.floor(Math.random()*1000000),
        pin: "4321"

    },
];
async function userId():Promise<string> {
    const inp= await inquirer.prompt([
        {
            type :"string",
            name :"ID",
            message:"Please Enter your User ID "
        }
    ]);
    return inp.ID;
}
async function choice():Promise<string> {
    const ch= await inquirer.prompt([
        {
            type:"string",
            name : "choise",
            message:"Press y to do another transiction in the account "

    }]);
return ch.choise;
}
async function pass():Promise<string> {
    const usr= await inquirer.prompt([
        {
            type: "string",
            name :"pass",
            messange:"please enter your pin number"
        }
    ]);
    return usr.pass;   
}
async function tran():Promise<string> {
    const t=await inquirer.prompt([
        {
            type:"list",
            name:"tr",
            message:"chose transication do you want perform",
            choices:["Blance","Fast Cash","Cash Withdraw"]
        }
    ]);
    return t.tr;  
}
async function fCash():Promise<number> {
const num = await inquirer.prompt([
    {
        type:"list",
        name:"amount",
        message:"Please chose the amount that you want to withdraw",
        choices:[5000,10000,15000,20000]
    }
]);
return num.amount
}
async function wCash():Promise<number> {
    const num = await inquirer.prompt([
        {
            type:"number",
            name:"amount",
            message:"Please chose the amount that you want to withdraw",
        }
    ]);
    return num.amount
    }
let ID,flag=0,ch,pin,tra,withdraw;
ID= await userId();
for (let i=0;i<user.length;i++)
{
    if(ID == user[i].id){
        console.log("wellcome "+ user[i].name);
       pin=await pass();
      if(pin == user[i].pin){
        do{
            tra= await tran();
            if (tra == "Blance"){
                console.log("Blance in your account is "+user[i].blance )
            }
            else if (tra == "Fast Cash"){
                withdraw= await fCash();
                if(withdraw <= user[i].blance){
                    user[i].blance -= withdraw;
                    console.log(`amount RS ${withdraw} have been diducted from your account your new blance is ${user[i].blance}`);
                }
                else {
                    console.log("balance your account is low required transction can not be done blance in your account is "+user[i].blance);
                }

            }
            else{
                withdraw= await wCash();
                if(withdraw <= user[i].blance){
                    user[i].blance -= withdraw;
                    console.log(`amount RS ${withdraw} have been diducted from your account your new blance is ${user[i].blance}`);
                }
                else {
                    console.log("balance your account is low required transction can not be done blance in your account is "+user[i].blance);
                }
            }
        
        ch=await choice();
        }while(ch == 'y')}
        else{
            console.log("You pin code is not valid do an other transiction");
        }
    flag++;
    }
}
if(flag == 0){
    console.log("User record is not present please do an other transiction");
}