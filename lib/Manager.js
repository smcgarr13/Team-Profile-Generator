const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        if (!officeNumber || typeof officeNumber !== 'string') {
            throw new Error('Manager office number cannot be an empty string')
          }
        this.officeNumber = officeNumber;
    }
    // Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;