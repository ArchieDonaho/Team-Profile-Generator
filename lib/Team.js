const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const generateHTML = require('../src/GenerateHTML.js')
const inquirer = require('inquirer');
const fs = require('fs');

function Team(){
    //object that contains the manager and arrays that contain each engineer & intern
    //we have the manager as an object, even though there will only be 1, to make the coding less complex when generating the html later on
    this.manager = [];
    this.engineers = [];
    this.interns = [];
}

//store the questions as a string to be evaluated when called upon. the questions will vary based on what type of worker is being asked about
const questions = type => {
    var specialtyQuestion;
    if(type === 'Manager'){
        specialtyQuestion = `
        {
            type: 'text',
            name: 'officeNumber',
            message: "What is your team Manager's office number?",
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log("(This section cannot be blank)")
                    return false;
                }
            }
        },
        `;

    } else if(type === 'Engineer'){
        specialtyQuestion = `
        {
            type: 'text',
            name: 'github',
            message: "What is your team Engineer's GitHub username?",
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log("(This section cannot be blank)")
                    return false;
                }
            }
        },
        `;

    } else if(type === 'Intern'){
        specialtyQuestion = `
        {
            type: 'text',
            name: 'school',
            message: "What is your team Intern's school name?",
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log("(This section cannot be blank)")
                    return false;
                }
            }
        },
        `;

    };

    return `[
        {
            type: 'text',
            name: 'name',
            message: "What is your team ${type}'s name?",
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
            message: "What is your team ${type}'s employee ID?",
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
            message: "What is your team ${type}'s email?",
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
        ${specialtyQuestion}
        {
            type: "list",
            name: 'worker',
            message: "Would you like to add another worker? If so, select form the options below",
            choices: [
                '1. No, I am done adding workers',
                '2. Add an Engineer',
                '3. Add an Intern'
            ],
            default: '1. No, I am done adding workers'
        }
    ]`
}

Team.prototype.start = function(){
    console.log(`
    Welcome to the Employee Profile Generator
    _________________________________________
    `);

    inquirer.prompt( eval( questions("Manager") ) )
        .then( ({name, id, email, officeNumber, worker}) => {
            this.manager.push(new Manager(name, id, email, officeNumber, worker));
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
    inquirer.prompt( eval( questions("Engineer") ) )
        .then( ({name, id, email, github, worker}) => {
            this.engineers.push(new Engineer(name, id, email, github, worker));
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

Team.prototype.intern = function(){
    inquirer.prompt( eval( questions("Intern") ) )
        .then( ({name, id, email, school, worker}) => {
            this.interns.push(new Intern(name, id, email, school, worker));
            console.log(this.interns)
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

Team.prototype.finalize = function(){
    console.log('Generating HTML...');
    
    html = generateHTML(this.manager, this.engineers, this.interns);
    fs.writeFile('./dist/index.html', html, error => {
        console.log('HTML Written!\nCheck out /dist/index.html to see your generated html file.')
    })
}


module.exports = Team;