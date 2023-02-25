// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  switch(license){
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case "IBM":
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    case "Mozilla" :
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'ISC' :
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    case 'None' :
      return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, install, usage, collaborators, thirdparty, license}) {
  return `# ${title}
  ## Description 
  ${description}
  
  ## Table of Contents 
  
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
  ${renderLicense(license)}
`;
}

module.exports = generateMarkdown;
