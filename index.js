// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: inputTitle => {
            if (inputTitle) {
                return true;
            } else {
                console.log('Please enter a title!')
                return false;
            }
        }
    },

    {
        type: "input",
        name: "description",
        message: "Provide a description for your project? (Required)",
        validate: inputDescription => {
            if (inputDescription) {
                return true;
            } else {
                console.log('Please enter a description!')
                return false;
            }
        } 
    },

    {
        type: "checkbox",
        name: "languages",
        message: "What did you this project with? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },

    {
        type: "input",
        name: "usage",
        message: "How do you use this project? (Required)",
        validate: inputUsage => {
            if (inputUsage) {
                return true;
            } else {
                console.log('Please information on how to use the project!')
                return false;
            }
        }
    },

    {
        type: "input",
        name: "contributions",
        message: "How can people contribute to your project? (Required)",
        validate: inputContributions => {
            if (inputContributions) {
                return true;
            } else {
                console.log('You need to provide information explaining how to contribute!')
                return false;
            }
        }
    },

    {
        type: "input",
        name: "testing",
        message: "how do you test this? (Required)",
        validate: inputTesting => {
            if (inputTesting) {
                return true;
            } else {
                console.log('Explain how you test this project!')
                return false;
            }
        }
    },

    {
        type: "checkbox",
        name: "licensing",
        message: "Choose which license for your project (Required)",
        choice: ['Apache', 'MIT', 'Mozilla-Public', 'common-development-and-distribution', 'none'],
        validate: inputLicenses => {
            if (inputLicenses) {
                return true;
            } else {
                console.log('You have to pick a license for your project!')
                return false;
            }
        }
    },

    {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need to enter a project GitHub link!");
            return false;
          }
        },
      },

      {
          type: 'input',
          name: 'email',
          message: 'Would you like to include your email'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to READMe')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

init();

