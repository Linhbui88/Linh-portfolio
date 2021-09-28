var inquirer= require('inquirer')
var fs= require('fs')
const licenseChoices=[
  {name:'MIT',
  link:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  },
  {name: 'BSD 3-Clause',
  link:'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  },
  {name: 'Apache 2.0',
  link:'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  },
  {name: 'IBM 1.0',
  link:'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  },
]
var licenseNames=[]

licenseChoices.forEach((license)=>{
  licenseNames.push(license.name)
})

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'profile',
      message: 'What is the  URL to your GitHub profile?'

    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project'
    },
    {
      type: 'list',
      name: 'selectedLicense',
      message: 'What kind of license should your project have?',
      choices: licenseNames
    },
    {
      type: 'default',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
      default: 'npm i',
    },
    
    {
      type: 'default',
      name: 'runTest',
      message: 'What command should be run to run tests?',
      default: 'npm test',
    },
    {
      type: 'input',
      name: 'liveLink',
      message: 'What is live link to deployed app?',
      
    },
    {
      type: 'input',
      name: 'listTech',
      message: 'List of technologies used?',
      
    },
    {
      type: 'input',
      name: 'collab',
      message: 'List of collaborators GitHub profile(s)?',
      
    },
    
    
    
  ])
  .then(answers => {
    const {username,email,profile,projectName,description,selectedLicense,dependencies,runTest,liveLink,listTech,collab} = answers

    let linkLicense
    licenseChoices.forEach((license) =>{
      console.log(selectedLicense)
      console.log(license.name)
      if(selectedLicense===license.name){ 
        linkLicense= license.link
      }
    })
    
    let readMe =
    `# ${projectName}\n
${linkLicense}\n

## ${description}\n

## Table of Contents

* [Installation](#installation)\n

* [Technologies](#technologies)\n

* [Live link to deployed app](#live)\n

* [License](#license)\n

* [Tests](#tests)\n

* [Collaborators](#collaborators)\n

* [Screenshot](#screenshot)\n

* [Questions](#questions)\n


## Installation
      
To install necessary dependencies, run the following command: 

\`\`\`
${dependencies}
\`\`\`

## Technologies
List of all Technologies have been used in this project:\n

${listTech}\n

## Live
Live link to deployed app

${liveLink}

## License

This project is licensed under the ${selectedLicense}.

## Tests

To run tests, run the following command:

\`\`\`
${runTest}
\`\`\`

## Collaborators

${collab}\n

## Screenshot


## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}.You can find more of my work at [${username}](${profile}).


`

      fs.writeFile('README.md',readMe,err =>{
        console.log(err)
        console.log('Generating README...')
      })

  })
