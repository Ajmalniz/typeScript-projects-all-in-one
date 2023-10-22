#! /usr/bin/env node
import inquirer from "inquirer";
async function user_input():Promise<number> {
    let ans = await inquirer.prompt([
        {
            type: "number",
            name: "num",
            message:"Guess the number between 0 and 9"
        }
    ]);
    return ans.num;
}
    let input,score = 0,choice=0,rand=Math.floor(Math.random() *10);
    console.log("Rule is simple if you guess the number 3 time wrong then game will be over \n other wise 100 point will be added into your score")
  do {
    
   input= await user_input();
    if( input == rand){
        console.log("Hurrah ! you have correctly guessed the number 100 points added to the score now guess the next number");
        score += 100;
        choice=0;
        rand=Math.floor(Math.random() *10);
    }
    else {
        choice++;
    }
  }while(choice < 3)
    console.log("You cleared total " + (score/100) +" Levels");
    console.log("\n Your score is = "+score);
