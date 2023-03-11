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
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer name"
            }, // added comma here
    
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer id"
            }, // added comma here
    
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer email"
            }, // added comma here
    
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer github"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idList.push(answers.engineerId);
            createTeam();
        });
    }
    
function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamMember",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
      ])
      .then(response => {
        switch (response.teamMember) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            console.log("Your team is complete!");
            console.log(teamArray);
            break;
        }
      });
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
