//generates the card
generateCard = (workers) => {
    //return a string containing the html for all workers
    const allWorkers = workers.map( worker => {
        const {name, id, email, officeNumber, github, school, role} = worker;
        //assign the specific attribute of the worker to a variable
        var specialty;
        if(github){
            specialty = `GitHub: <a class="text-decoration-none text-success" target="_blank" href="https://github.com/${github}/">${github}</a>`;
        } else if(school){
            specialty = `School: ${school}`;
        } else if(officeNumber){
            specialty = `Office Number: ${officeNumber}`;
        };

        return `
        <div class="col-3 my-2">
            <div class="card border border-dark">
                <h2 class="card-header bg-secondary text-white text-capitalize text-center">Team ${role}: ${name}</h2>
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li class="bigger">ID: ${id}</li>
                        <li class="bigger">Email: <a class="text-decoration-none text-info" target="_blank" href="${email}">${email}</a></li>
                        <li class="text-capitalize bigger">${specialty}</li>
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
    <header class="mb-3 p-1 bg-info border-bottom border-dark">
        <h1 class="text-center  display-1">My Team</h1>
    </header>

    <div class="m-5 d-flex justify-content-center">

        ${generateCard(manager)}

    </div>

    <div class="row mx-3 d-flex justify-content-center">
        
        ${generateCard(engineers)}

        ${generateCard(interns)}

    </div>
    
</body>
</html>
    `;
}

module.exports = generateHTML;