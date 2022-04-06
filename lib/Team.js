const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const inquirer = require('inquirer');

function Team(){
    this.manager;
    this.workers = [];
    this.engineer;
    this.intern;
}

const questions = type => {
    return [
        {
            type: 'text',
            name: 'name',
            message: `What is your team ${type}'s name?`,
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log("(This section cannot be blank)")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: `What is your team ${type}'s employee ID?`,
            validate: input => {
                if(!input){
                    console.log("(This section cannot be blank)")
                    return false;
                } else if(isNaN(input)){
                    console.log("(Employee ID can only be a numeric value)")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: `What is your team ${type}'s email?`,
            validate: input => {
                if(!input){
                    console.log("(This section cannot be blank)")
                    return false;
                } else if(!input.includes('@') || !input.includes('.com')){
                    console.log("(You must use a valid email adress)")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: `What is your team ${type}'s office number?`,
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log("(This section cannot be blank)")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'worker',
            message: "Would you like to add another worker? If so, select form the options below",
            choices: [
                '1. No, I am done adding workers',
                '2. Add an Engineer',
                '3. Add an Intern'
            ]
        }
    ]
}

Team.prototype.start = function(){
    console.log(`
    Welcome to the Employee Profile Generator
    _________________________________________
    `);

    inquirer
        .prompt(questions("manager")
        //     [{
        //     type: 'text',
        //     name: 'name',
        //     message: "What is your team manager's name?",
        //     validate: input => {
        //         if(input){
        //             return true;
        //         } else {
        //             console.log("(This section cannot be blank)")
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'text',
        //     name: 'id',
        //     message: "What is your team manager's employee ID?",
        //     validate: input => {
        //         if(!input){
        //             console.log("(This section cannot be blank)")
        //             return false;
        //         } else if(isNaN(input)){
        //             console.log("(Employee ID can only be a numeric value)")
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     }
        // },
        // {
        //     type: 'text',
        //     name: 'email',
        //     message: "What is your team manager's email?",
        //     validate: input => {
        //         if(!input){
        //             console.log("(This section cannot be blank)")
        //             return false;
        //         } else if(!input.includes('@') || !input.includes('.com')){
        //             console.log("(You must use a valid email adress)")
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     }
        // },
        // {
        //     type: 'text',
        //     name: 'officeNumber',
        //     message: "What is your team manager's office number?",
        //     validate: input => {
        //         if(input){
        //             return true;
        //         } else {
        //             console.log("(This section cannot be blank)")
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'list',
        //     name: 'worker',
        //     message: "Would you like to add another worker? If so, select form the options below",
        //     choices: [
        //         '1. No, I am done adding workers',
        //         '2. Add an Engineer',
        //         '3. Add an Intern'
        //     ]
        // }
        // ]
        )
        .then( ({name, id, email, officeNumber, worker}) => {
            //add the manager to the team object
            this.manager =  new Manager(name, id, email, officeNumber);
            //depending on the choice made earlier, direct the user to the appropriate method
            switch(worker.split('.', 1)[0]){
                case '1':
                    this.finalize();
                    break;
                case '2':
                    this.engineer();
                    break;
                case '3':
                    this.intern();
                    break;
            }
        })
}

Team.prototype.engineer = function(){
    console.log('in engineer')
    inquirer
        .prompt([{}])
        .then( ({name, id, email, github, worker}))

}

Team.prototype.intern = function(){
    console.log('in intern')
    inquirer
        .prompt([{}])
        .then( ({name, id, email, school, worker}))

}

Team.prototype.finalize = function(){
    console.log('in finalize')
}
module.exports = Team;