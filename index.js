// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ({title, description, install, usage, collaborators,thirdparty}) =>
`# <${title}>

## Description 
${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Needed Software
${install}

## Usage
${usage}

## Credits
Collaborators worked with: ${collaborators}
Third Parties used: ${thirdparty}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
`
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your projects title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project. Include a description of why you built it and any challenges you came across along the way.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'give instructions for how to properly install any software and run the application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Give instructions for a user to be able to follow while using your application. You can use a formal that follows the WHEN and Then formatting.',
    },
    {
      type: 'input',
      name: 'collaborators',
      message: 'Enter a full list of names of anyone whom you collobarated with.',
    },
    {
      type: 'input',
      name: 'thirdparty',
      message: 'Enter a full list of Third-Party names you used for the project.',
    },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'Which lecense did you choose',
    //     choices: [MIT]
    //   },
  ])
  .then((answers) => {
    const readmePageContent = questions(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


