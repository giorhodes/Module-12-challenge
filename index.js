const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const idList = [];
const teamMembers = [];

const appMen = () => {

    function buildTeam(){
        
    }


    function addInter(){
        
    }


    function addEngineer(){
        
    }


    function createTeam (){
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What is the team member would you like to add?"
                choices: [
"Engineer",
"Intern",
"I dont want to add any more members"

            
                ]
            }


        ]).then(userChoice => {
if(userChoice.memberChoice === "intern") {
    //add engineer

} else if (userChoice.memberChoice === "intern") {
    // add intern
} else {
    // build team function
}


        })
    }




    function createManager() {
        console.log("please build your team");
       inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character";
                }
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the team manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idList.push(answers.managerID);
            createReadStream();
        });
    }

    createManager();
};
