// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer.prompt([

    {
        type: "input",
        message: "What is your Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description explaining your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "requiredsteps"
    },
    {
        type: "list",
        message: "What license did you get for this application?",
        name: "license",
        choices: ["Mit", "GNU AGPLv3", "Apache License 2.0", "Mozilla Public License 2.0","The Unlicense"]
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

${input.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

#Installation

Required steps to install for your project are ${input.requiredsteps}

#Usage

To run this app, go to the terminal type ${input.useage}

#Licsense

${input.license}

#Contributing



#Tests



#Questions



`
}

// Function call to initialize app
// generatereadMe();
