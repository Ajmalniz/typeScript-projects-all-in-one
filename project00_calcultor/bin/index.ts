#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = (): Promise<void> => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let neon = chalkAnimation.neon("Let's start the calculation");
  await sleep();
  neon.stop();
  const text = `
     _____________________
    |  _________________  |
    | | AJMAL       0.  | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
`;

console.log(
    chalk.blue(text)
);
}

await welcome();

async function askQuestion() {
  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "Which operation do you want to perform?\n",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      type: "number",
      name: "num1",
      message: "Enter the first number",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter the second number",
    },
  ]);

  let res;
  if (ans.operator === "Addition") {
    res = ans.num1 + ans.num2;
  } else if (ans.operator === "Subtraction") {
    res = ans.num1 - ans.num2;
  } else if (ans.operator === "Multiplication") {
    res = ans.num1 * ans.num2;
  } else if (ans.operator === "Division") {
    res = ans.num1 / ans.num2;
  }
  console.log(`Result is ${res}`);
}

async function start() {
  do{
  await askQuestion();
  var again = await inquirer
.prompt({
 type:"input",
 name: "choice",
 message:"To continue calcluation press y \n or press any other key to end the program" 
})  
}
    while(again.choice == 'y')
}
  start();

