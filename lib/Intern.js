const Employee = require('./employee.js')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        if (!school || typeof school !== 'string') {
            throw new Error('Intern school cannot be an empty string')
          }
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

module.exports = Intern;