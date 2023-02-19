

const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const express = require('express');
const app = express();
const templateHelperCode = require('./src/template-helper-code.js');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const path = require('path');

const {
    managerFunction,
    engineerFunction,
    internFunction,
    mainBody,
} = require('./src/template-helper-code.js');

const distPath = path.join(__dirname, 'dist');
//ensure the dist folder exists
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}

const generateManager = async () => {
    // const answers = inquirer.createPromptModule([
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ]);
    return managerFunction(answers.name, answers.id, answers.email, answers.officeNumber);
};

const generateEngineer = async () => {
    // const answers = inquirer.createPromptModule([
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ]);
    return engineerFunction(answers.name, answers.id, answers.email, answers.github);
};

const generateIntern = async () => {
    // const answers = inquirer.createPromptModule([
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        }
    ]);
    return internFunction(answers.name, answers.id, answers.email, answers.school);
};

// const managerTemplate = generateManager(Manager, templateHelperCode.templateHelperCode);

// dynamically create HTML file
const generateHTML = (cards) => {
    return mainBody(cards);
};

const init = async () => {
    const cards = [];
    let done = false;

    while (!done) {
        const {employeeType} = await inquirer.prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'What type of employee would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern', 'Finish building team'],
            },
        ]);

        switch (employeeType) {
            case 'Manager':
                cards.push(await generateManager());
                break;
            case 'Engineer':
                cards.push(await generateEngineer());
                break;
            case 'Intern':
                cards.push(await generateIntern());
                break;
            case 'Finish building team':
                done = true;
                break;
                default:
                break;
        }
    }

const html = generateHTML(cards);

fs.writeFileSync(path.join(distPath, 'index.html'), html);
};

init();

// const generateHTML = (cards) => {
//     const html = mainBody(cards);
//     fs.writeFile(path.join(disPath, 'index.html',), html, (err) => {
//         if (err) {
//             console.log(err);
//         }else{
//             console.log('HTML file generated!!');
//         }
//     });
// };

// // TODO: Create classes for: Employee, Manager, Engineer, and Intern


// // TODO: The first class is an Employee parent class with the following properties and methods:

// class Employee {
//     constructor(name, id, email) {
//       // validation
//       if (!name || typeof name !== 'string') {
//         throw new Error('Employee name cannot be an empty string')
//       }
//       if (!id || typeof id !== 'string') {
//         throw new Error('Employee id cannot be an empty string')
//       }
//       if (!email || typeof email !== 'string') {
//         throw new Error('Employee email cannot be an empty string')
//       }

//       this.name = name;
//       this.id = id;
//       this.email = email;
//     //   this.createdOn = createdOn;
//     //   this.comments = [];
//     }

//     // method to print the meta data
//     printMetaData() {
//         console.log('Name: ${this.name}\n\nid: ${this.id}\n\nemail: ${this.email}')
//     };

//     getName() {
//         return this.name;
//     }

//     getId() {
//         return this.id;
//     }

//     getEmail() {
//         return this.email;
//     }
// // Returns 'Employee'
//     getRole() {
//     return 'Employee';
//     }
// }


// // TODO: The other three classes will extend Employee.  In addition to Employee's properties and methods, Manager will also have "officeNumber"

// class Manager extends Employee {
//     constructor(name, id, email, officeNumber) {
//         super(name, id, email)
//         if (!officeNumber || typeof officeNumber !== 'string') {
//             throw new Error('Manager office number cannot be an empty string')
//           }
//         this.officeNumber = officeNumber;
//     }
//     // Overridden to return 'Manager'
//     getRole() {
//         return 'Manager';
//     }
// }

// // TODO: In addition to Employee's properties and methods, Engineer will also have "github" (GitHub username)

// class Engineer extends Employee {
//     constructor(name, id, email, github) {
//         super(name, id, email)
//         if (!github || typeof github !== 'string') {
//             throw new Error('Engineer github cannot be an empty string')
//           }
//         this.github = github;
//     }
//     getGithub() {
//         return this.github
//     }
// // Overridden to return 'Engineer'
//     getRole() {
//         return 'Engineer';
//     }
// }


// // TODO: In addition to Employee's properties and methods, Intern will also have "school"

// class Intern extends Employee {
//     constructor(name, id, email, school) {
//         super(name, id, email)
//         if (!school || typeof school !== 'string') {
//             throw new Error('Intern school cannot be an empty string')
//           }
//         this.school = school;
//     }
//     getSchool() {
//         return this.school
//     }
// // Overridden to return 'Intern'
//     getRole() {
//         return 'Intern';
//     }
// }
// // run
// // TODO: Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.




// app.get('/', (req, res) => {
//     const employees = [
//         new Manager('name1', '1', 'email1@email.com', '101'),
//         new Engineer('name2', '2', 'email2@email.com', 'github2'),
//         new Intern('name3', '3', 'email3@email.com', 'UofM')
//     ];

//     const employeeCards = employees.map(employee => {
//         let extraInfo = '';
//         if (employee instanceof Manager) {
//             extraInfo = `Office Number: ${employee.officeNumber}`;
//         } else if (employee instanceof Engineer) {
//             extraInfo = `GitHub: ${employee.github}`;
//         } else if (employee instanceof Intern) {
//             extraInfo = `School ${employee.school}`;
//         }

//         return `
//         <div class="card">
//           <h2>${employee.name}</h2>
//           <p>ID: ${employee.id}</p>
//           <p>Email: <a href='mailto: ${employee.email}'>${employee.email}</a></p>
//           <p>${extraInfo}</p>
//           <p>Role: ${employee.getRole()}</p>
//         </div>
//         `;
//     });

    // const html = `
    // <!DOCTYPE html>
    // <html>
    //   <head>
    //     <title>My Team</title>
    //     <style>
    //         .card {
    //             border: 1px solid black;
    //             padding: 10px;
    //             margin: 10px;
    //         }
    //     </style>
    //   </head>
    //   <body>
    //     <h1>My Team</h1>
    //     ${employeeCards.join('')}
    //   </body>
    //   </html>
    // `;

    // fs.writeFile(`${distPath}/team.html`, html, err => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log('File created successfuklly!!');
    // });
// });




// app.get('/', (req, res) => {
//     const data = {
//         title: '',
//         message: ''
//     };
//     res.render('template-file', {data, templateHelperCode});
// });