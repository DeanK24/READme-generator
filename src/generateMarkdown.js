// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return '';
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return '';
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    
    The application is covered under the following license:
    
    ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}

function renderLicenseTOC(license) {
  if(license !== 'no license') {
    return `
    *[License](#license)
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ##Table of contents

  -[Description](#description)
  -[Installation](#installation)
  -[usage](#usage)
  ${renderLicenseTOC(data.license)}
  -[contribution](#contribution)
  -[testing](#testing)
  -[additional info](#additional-info)

  ## Description:
  ${data.description}

  ## installation:
  ${data.installation}

  ## usage:
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## contribution:
  ${data.contribution}

  ## testing:
  ${data.testing}

  ## Additional info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown();