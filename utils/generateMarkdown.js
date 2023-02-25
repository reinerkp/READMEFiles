// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {}

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
