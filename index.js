const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// TODO: Create classes for: Employee, Manager, Engineer, and Intern


// TODO: The first class is an Employee parent class with the following properties and methods:

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    //   this.createdOn = createdOn;
    //   this.comments = [];
    }

    // method to print the meta data
    printMetaData() {
        console.log('Name: ${this.name}\n\nid: ${this.id}\n\nemail: ${this.email}')
    };

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
// Returns 'Employee'
    getRole() {
    return 'Employee';
    }
}


// TODO: The other three classes will extend Employee.  In addition to Employee's properties and methods, Manager will also have "officeNumber"

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    // Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

// TODO: In addition to Employee's properties and methods, Engineer will also have "github" (GitHub username)

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github
    }
// Overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}


// TODO: In addition to Employee's properties and methods, Intern will also have "school"

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school
    }
// Overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

// TODO: Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.