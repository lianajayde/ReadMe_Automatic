//Function that returns license badge
function renderLicenseBadge(license) {
    if (license === "Apache 2.0 License") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } 
    else if (license === "The MIT License") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } 
    else if (license === "") {
      return "";
    }
  }

  //Function that returns the license link
  function renderLicenseLink(license) {
    if (license === "Apache 2.0 License") {
      return "(https://opensource.org/licenses/Apache-2.0)";
    } 
    else if (license === "The MIT License") {
      return "(https://opensource.org/licenses/MIT)";
    } 
    else if (license === "") {
      return "";
    }
  }
   
function renderLicenseSection(license) {}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  *[Project Description](#description)
  *[Installation Instructions](#installation)
  *[Usage](#useage)
  *[Contribution Guidelines](#contributing)
  *[${renderLicenseLink(data.License)}](#License)
  *[Testing](#tests)
  *[ContactInfo](#contactinfo)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution Guidelines
  ${data.credits}
  ## Testing Instructions
  ${data.testing}
  ## License 
  ${data.license}
  ## Contact Info
  - Github: ${data.git}
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
