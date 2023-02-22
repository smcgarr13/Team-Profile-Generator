const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const express = require("express");
const app = express();
const templateHelperCode = require("./src/template-helper-code.js");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");

const {
  managerFunction,
  engineerFunction,
  internFunction,
  mainBody,
} = require("./src/template-helper-code.js");

const distPath = path.join(__dirname, "dist");
//check for dist folder
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

// Team set-up question prompts
const generateManager = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
    },
  ]);
  return managerFunction(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
};

const generateEngineer = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?",
    },
  ]);
  return engineerFunction(
    answers.name,
    answers.id,
    answers.email,
    answers.github
  );
};

const generateIntern = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
    },
  ]);
  return internFunction(
    answers.name,
    answers.id,
    answers.email,
    answers.school
  );
};

// dynamically generate HTML file
const generateHTML = (cards) => {
  return mainBody(cards);
};

const init = async () => {
  const cards = [];
  let done = false;
  let hasManager = false;

  while (!done) {
    const { employeeType } = await inquirer.prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: hasManager
          ? ["Engineer", "Intern", "Finish building team"]
          : ["Manager", "Engineer", "Intern", "Finish building team"],
      },
    ]);

    switch (employeeType) {
      case "Manager":
        cards.push(await generateManager());
        hasManager = true;
        break;
      case "Engineer":
        cards.push(await generateEngineer());
        break;
      case "Intern":
        cards.push(await generateIntern());
        break;
      case "Finish building team":
        done = true;
        break;
      default:
        break;
    }
  }

  const html = generateHTML(cards);

  fs.writeFileSync(path.join(distPath, "index.html"), html);
};

init();
