const Team = require('./lib/Team.js');
// const inquirer = require('inquirer');
// const Manager = require('./lib/Manager.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');


const team = new Team()
    .start()
    // .then(()=>{
    //     console.log(team)
    // })

// console.log(`
// Welcome to the Employee Profile Generator
// _________________________________________
// `);

// inquirer
//     .prompt([{
//         type: 'text',
//         name: 'name',
//         message: "What is your team manager's name?",
//         validate: input => {
//             if(input){
//                 return true;
//             } else {
//                 console.log("(This section cannot be blank)")
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'text',
//         name: 'id',
//         message: "What is your team manager's employee ID?",
//         validate: input => {
//             if(!input){
//                 console.log("(This section cannot be blank)")
//                 return false;
//             } else if(isNaN(input)){
//                 console.log("(Employee ID can only be a numeric value)")
//                 return false;
//             } else {
//                 return true;
//             }
//         }
//     },
//     {
//         type: 'text',
//         name: 'email',
//         message: "What is your team manager's email?",
//         validate: input => {
//             if(!input){
//                 console.log("(This section cannot be blank)")
//                 return false;
//             } else if(!input.includes('@') || !input.includes('.com')){
//                 console.log("(You must use a valid email adress)")
//                 return false;
//             } else {
//                 return true;
//             }
//         }
//     },
//     {
//         type: 'text',
//         name: 'officeNumber',
//         message: "What is your team manager's office number?",
//         validate: input => {
//             if(input){
//                 return true;
//             } else {
//                 console.log("(This section cannot be blank)")
//                 return false;
//             }
//         }
//     }])
//     .then( ({name, id, email, officeNumber}) => {
//         manager =  new Manager(name, id, email, officeNumber);;
//         console.log(manager);
//     })

