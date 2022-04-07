//generates the card
generateCard = (workers) => {
    //return a string containing the html for all workers
    const allWorkers = workers.map( worker => {
        const {name, id, email, officeNumber, github, school, role} = worker;
        //assign the specific attribute of the worker to a variable
        var specialty;
        if(github){
            specialty = `GitHub: <a target="_blank" href="https://github.com/${github}/">${github}</a>`;
        } else if(school){
            specialty = `School: ${school}`;
        } else if(officeNumber){
            specialty = `Office Number: ${officeNumber}`;
        };

        return `
        <div class="col-3">
            <div class="card">
                <div class="card-header">Team ${role}: ${name}</div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${id}</li>
                        <li>Email: <a target="_blank" href="${email}">${email}</a></li>
                        <li>${specialty}</li>
                    </ul>
                </div>
            </div>
        </div>
        `         
    })
    //then combine all the strings together
    .join(' \n');
    return allWorkers;
} 

generateHTML = (manager, engineers, interns) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1 class="text-center mb-5">My Team</h1>
        </header>

        <div class="row">

            ${generateCard(manager)}

        </div>

        <div class="row">
            
            ${generateCard(engineers)}

            ${generateCard(interns)}

        </div>
        
    </body>
    </html>
    `;
}

module.exports = generateHTML;