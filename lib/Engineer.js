// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

const Employee = require('../lib/Employee.js')

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }

    getRole(){
        return this.role;
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;