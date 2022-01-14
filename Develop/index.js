// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer.prompt([

    {
        type: "input",
        message: "What is your GitHub Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Add a description of your Github",
        name: "description"
    },
])

// TODO: Create a function to write README file

.then((answers) => {
    // console.log(answers);
    var readMe = generatereadMe(answers);
    // console.log(readMe);
    fs.writeFile('testREADME.md', readMe, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successfully created your personal ReadMe :)");
    })
})
.catch(err => {
    console.log(err);
})

// TODO: Create a function to initialize app
function generatereadMe(input) {
    return `# ${input.title}
## Description
${input.description}`
}

// Function call to initialize app
// generatereadMe();
