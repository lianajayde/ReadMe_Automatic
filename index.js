//Including packages needed
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown.js')


//Created an array of questions for user input
inquirer.prompt(
    [
        {   
            type: 'input',
            message:'What is the title of your project?',
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'Value needs to be entered'}},
        },
        {
            type: 'input',
            message: 'Description of your project?',
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'Value needs to be entered'}},
        },
        {
            type: 'input',
            message: 'Instructions for installing the project are..',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'Value needs to be entered'}},
        },
        {
            type: 'input',
            message: 'What/How will this project be used?',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'Value needs to be entered'}},
        },
        {
            type: 'input',
            message: 'Provide any contribution guidelines:',
            name: 'credits',
            validate: (value)=>{ if(value){return true} else {return 'Value needs to be entered'}},
        },
        {
            type: 'input',
            message: 'Provide any instructions for testing:',
            name: 'testing',
            validate: (value)=>{ if(value){return true} else {return 'Value needs to be entered'}},
        },
        {
            type: 'list',
            message: 'What license was used?',
            choices:['The MIT License', 'Apache 2.0 License', 'N/A'],
            name: 'license',
            validate: (value)=>{ if(value){return true} else {return 'Value needs to be entered'}},
        },
        {
            type: 'input',
            message: 'What is your email address and github username?',
            name: 'email',
            validate: (value)=>{ if(value){return true} else {return 'Value needs to be entered'}},
        },
    ])
//List
.then(({
    title,
    description,
    installation,
    usage,
    credits,
    testing,
    license,
    email
//Template
}) => { 
    const template = `# ${title}
  
    *[Installation](#installation)
    *[Description](#description)
    *[Instruction](#instruction)
    *[Usage](#usage)
    *[Credits](#credits)
    *[License](#license)
    ## Installation
    ${installation}
    ## Description
    ${description}
    ## Usage
    ${usage}
    ## Credits
    ${credits}
    ## Description
    ${description}
    ## Testing
    ${testing}
    ## License
    ${license}

    # Contact Info
    * E-mail: ${email}`;

//Function to write README file
createNewFile(title, template); 
});

//Creating new file function
function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your generated ReadME has been created');
    })
}