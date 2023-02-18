class Employee {
    constructor(name, id, email) {
      // validation
      if (!name || typeof name !== 'string') {
        throw new Error('Employee name cannot be an empty string')
      }
      if (!id || typeof id !== 'number') {
        throw new Error('Employee id cannot be an empty number')
      }
      if (!email || typeof email !== 'string') {
        throw new Error('Employee email cannot be an empty string')
      }

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