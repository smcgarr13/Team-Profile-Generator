class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        if (!github || typeof github !== 'string') {
            throw new Error('Engineer github cannot be an empty string')
          }
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