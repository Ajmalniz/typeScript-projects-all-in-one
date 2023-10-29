import inquirer from "inquirer";
class Student {
    constructor(name) {
        this.name = name;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(std) {
        this.students.push(std);
    }
}
const pers = new Person();
const start = async (pre) => {
    console.log("Welcome ");
    const ans = await inquirer.prompt({
        type: "list",
        message: "with whom you want to talk",
        name: "inp",
        choices: ["self", "students"],
    });
    if (ans.inp == "self") {
        console.log("hi you are talking to your self");
        console.log("i am fine");
    }
    else {
    }
};
start(pers);
