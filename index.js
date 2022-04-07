const Team = require('./lib/Team.js');
const fs = require('fs');

const testManager = {
    name: 'mike',
    id: '1',
    email: 'mike@email.com',
    officeNumber: '100',
    role: 'Manager'
}

const testEngineer = [
    {
      name: 'Kait',
      id: '2',
      email: 'kait@email.com',
      github: 'KaitGithub',
      role: 'Engineer'
    },
    {
      name: 'Mark',
      id: '3',
      email: 'mark@email.com',
      github: 'MarkGithub',
      role: 'Engineer'
    }
]

const testIntern = [
    {
      name: 'Ivan',
      id: '4',
      email: 'ivan@email.com',
      school: 'Texas State',
      role: 'Intern'
    },
    {
      name: 'Carl',
      id: '5',
      email: 'carl@email.com',
      school: 'UTSA',
      role: 'Intern'
    }
]


initialize = () => {
    const team = new Team().start();

    //test
    // html = generateHTML(testManager, testEngineer, testIntern);
    // fs.writeFile('./dist/index.html', html, error => {
    //     console.log('HTML Written')
    // })
};

initialize();

