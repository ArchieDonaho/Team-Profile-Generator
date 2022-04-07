generateCardHtml = (name, id, email, specialty, role) => {
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
}

//generates the card based on what type of employee they are
generateCard = (workers) => {
    //if we have either an engineers array or interns array
    if(Array.isArray(workers)){
        //return a string containing the html for all workers
        const allWorkers = workers.map( worker => {
            const {name, id, email, github, school, role} = worker;
            //depending on if the have an engineer or an intern, specify their school/github to a variable
            var specialty;
            if(github){
                specialty = `GitHub: <a target="_blank" href="https://github.com/${github}/">${github}</a>`;
            } else if(school){
                specialty = `School: ${school}`;
            }
            return generateCardHtml(name, id, email, specialty, role) ;           
        })
        //then combine all the strings together
        .join(' \n');
        return allWorkers;
    } else {
        //else, if we have the manager object, generate the manager card
        const {name, id, email, officeNumber, role} = workers;
        officeNumber = `Office Number: ${officeNumber}`;
        return generateCardHtml(name, id, email, officeNumber, role) ;           
    }
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