// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ##Table of contents
  -[Description](#description)
  -[Installation](#installation)
  -[usage](#usage)
  -[contribution](#contribution)
  -[testing](#testing)
  -[additional info](#additional-info)

  ## Description:
  ${data.description}

  ## installation:
  ${data.installation}

  ## usage:
  ${data.usage}

  ## contribution:
  ${data.contribution}

  ## testing:
  ${data.testing}

  ## Additional info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}] `;
}

module.exports = generateMarkdown();